const folders = [
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/biao",
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/MaiShuDeGuShi",
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/YifuMukeDeGushi",
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/ZuihouYiciXunli",
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/niqiu",
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/zhufu"
];

const folderDescriptionMap = {
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/biao": 'From "The Watch 表" by Leonid Panteleyev, adapted by Dong Qingdong 董青冬, illustrated by Hua Sanchuan 华三川, Beijing: Lianhuanhua chubanshe, 2003 [1980]. For the whole lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/biao/">here</a>.',
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/MaiShuDeGuShi": 'From "Die Geschichte eines Buchkaufs 买书的故事 (1976)" by Lu Xun 鲁迅, Illustrationen: Hu Keli 胡克礼, Shanghai: Shanghai renmin chubanshe, 1976. For the whole lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/luxun/">here</a>.',
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/YifuMukeDeGushi": 'From "Die Geschichte eines Holzschnitts 一幅木刻的故事" by Lu Xun 鲁迅, Illustrationen: Fan Yixin 范一辛, Shanghai: Shanghai renmin chubanshe, 1976. For the whole lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/luxun/">here</a>.',
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/ZuihouYiciXunli": 'From "Der letzte Besuch 最后一次巡礼" by Lu Xun 鲁迅, Illustrationen: Sheng Zengxiang 盛增祥, Shanghai: Shanghai renmin chubanshe, 1976. For the whole lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/luxun/">here</a>.',
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/niqiu": 'From "Niqiu Protects the Watermelons 泥鳅看瓜" with illustrations by Zhong Shan 钟山, Tianjian: Tianjin renmin meishu chubanshe, 1974. For the whole lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/niqiu/">here</a>.',
  "https://api.github.com/repos/chinacomx/translations/contents/public/images/zhufu": 'From "The New Years Sacrifice 祝福" by Lu Xun 鲁迅, illustrated by Yong Xiang 永祥, Hong Ren 洪仁, Yao Qiao 姚巧, Beijing: Beijing renmin meishu chubanshe, 1974. For the whole lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/zhufu/">here</a>.'
};

let images = [];
let folderToImagesMap = {};
const maxImagesPerDay = 5;
const localStorageKey = 'carouselImages';
const dateStorageKey = 'carouselDate';

async function fetchImages() {
  try {
      for (let folder of folders) {
          const response = await fetch(folder);
          if (!response.ok) {
              throw new Error(`Failed to fetch images from ${folder}`);
          }
          const data = await response.json();
          const folderImages = data.filter(item => item.type === "file").map(item => item.download_url);
          folderToImagesMap[folder] = folderImages;
          images.push(...folderImages);
      }
      initializeCarousel();
  } catch (error) {
      console.error("Error fetching images: ", error);
  }
}

function getRandomImages() {
  const shuffledImages = images.sort(() => 0.5 - Math.random());
  return shuffledImages.slice(0, maxImagesPerDay);
}

function saveImagesToLocalStorage(images) {
  localStorage.setItem(localStorageKey, JSON.stringify(images));
  localStorage.setItem(dateStorageKey, new Date().toDateString());
}

function loadImagesFromLocalStorage() {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

function isNewDay() {
  const storedDate = localStorage.getItem(dateStorageKey);
  const currentDate = new Date().toDateString();
  return storedDate !== currentDate;
}

function initializeCarousel() {
  if (isNewDay() || !localStorage.getItem(localStorageKey)) {
      const newImages = getRandomImages();
      saveImagesToLocalStorage(newImages);
  }
  const imagesToShow = loadImagesFromLocalStorage();
  displayImage(imagesToShow[Math.floor(Math.random() * imagesToShow.length)]);
}

function displayImage(imageUrl) {
  document.getElementById('carousel-image').src = imageUrl;

  const folder = Object.keys(folderToImagesMap).find(folder => folderToImagesMap[folder].includes(imageUrl));
  const description = folderDescriptionMap[folder];
  document.getElementById('image-description').innerHTML = description;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchImages();
});
