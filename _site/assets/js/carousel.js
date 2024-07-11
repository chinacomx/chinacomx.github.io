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

async function fetchImages() {
  for (let folder of folders) {
    const response = await fetch(folder);
    const data = await response.json();
    const folderImages = data.filter(item => item.type === "file").map(item => item.download_url);
    folderToImagesMap[folder] = folderImages;
    images.push(...folderImages);
  }
  selectRandomImage();
}

function selectRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  document.getElementById('carousel-image').src = randomImage;

  const folder = Object.keys(folderToImagesMap).find(folder => folderToImagesMap[folder].includes(randomImage));
  const description = folderDescriptionMap[folder];
  document.getElementById('image-description').innerHTML = description;
}

function prevImage() {
  selectRandomImage();
}

function nextImage() {
  selectRandomImage();
}

document.addEventListener('DOMContentLoaded', (event) => {
  fetchImages();
});