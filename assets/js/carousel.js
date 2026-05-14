const folders = [
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/biao",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/MaiShuDeGuShi",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/YifuMukeDeGushi",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/ZuihouYiciXunli",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/niqiu",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/zhufu",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/leifeng",
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/wushengdezhandou"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/bethune1973"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/bethune1979"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/tweezers"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/gongchandangyuan"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/yanghe"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/renyu"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/uncle"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/nezha"
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/bingconglin"
];

const folderDescriptionMap = {
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/biao": 'From "The Watch 表" by Leonid Panteleyev, adapted by Dong Qingdong 董青冬, illustrated by Hua Sanchuan 华三川, Beijing: Lianhuanhua chubanshe, 2003 [1980]. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/biao/">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/MaiShuDeGuShi": 'From "Die Geschichte eines Buchkaufs 买书的故事 (1976)" by Lu Xun 鲁迅, Illustrationen: Hu Keli 胡克礼, Shanghai: Shanghai renmin chubanshe, 1976. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/luxun/">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/YifuMukeDeGushi": 'From "Die Geschichte eines Holzschnitts 一幅木刻的故事" by Lu Xun 鲁迅, Illustrationen: Fan Yixin 范一辛, Shanghai: Shanghai renmin chubanshe, 1976. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/luxun/">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/luxun/ZuihouYiciXunli": 'From "Der letzte Besuch 最后一次巡礼" by Lu Xun 鲁迅, Illustrationen: Sheng Zengxiang 盛增祥, Shanghai: Shanghai renmin chubanshe, 1976. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/luxun/">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/niqiu": 'From "Niqiu Protects the Watermelons 泥鳅看瓜" with illustrations by Zhong Shan 钟山, Tianjian: Tianjin renmin meishu chubanshe, 1974. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/niqiu/">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/zhufu": 'From "The New Years Sacrifice 祝福" by Lu Xun 鲁迅, illustrated by Yong Xiang 永祥, Hong Ren 洪仁, Yao Qiao 姚巧, Beijing: Beijing renmin meishu chubanshe, 1974. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/zhufu/">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/leifeng": 'From "Lei Feng Youth Years 雷锋的少年时代", adapted by Liu Hanzhen 刘含真, illustrated by Qian Guisun 钱贵荪, Beijing: Renmin meishu chubanshe, 1973. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/leifeng">here</a>.',
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/wushengdezhandou": 'From "The Silent Fight 无声的战斗", illustrated by Wu Dacheng 吴大成, adapted from the work of Huo Miao 火苗, by Dong Yaogen 董耀根, Shanghai People’s Press, 1976. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/wushengdezhandou/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/bethune1973": 'From "Norman Bethune 白求恩", , edited by Wu Wenhuan 吴文焕, drawn by Hu Kewen 胡克文, Sheng Liangxian 盛亮贤, and Zhou Yunda 周允达, Shanghai: Shanghai renmin chubanshe, 1973. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/bethune/bethune1973/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/bethune1979": 'From "Doctor Bethune 白求恩大夫", provided by Shanghai Film Studio 上海电影制片厂, adapted by Wu Wenhuan 吴文焕, Shanghai: Shanghai renmin meishu chubanshe, 1979. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/bethune/bethune1979/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/tweezers": 'From "A Pair of Tweezers 一把镊子", adaptation and woodcut illustration by Wu Weide 邬维德, published in <i>Fuchunjiang huabao</i> 富春江画报, no. 343, 1981, pp. 14. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/tweezers/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/gongchandangyuan": 'From "Are you a Communist? 你是共产党员吗", illustrated by Wang Jieyin 王劼音, text by Bai Wanchun 柏万春 and Chen Kehui 陈克会, adapted from an eponymous novel by Zhang Lin 张林, published in <i>Lianhuanhua bao</i> 连环画报 07/1981 (92), pp. ii-8. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/gongchandangyuan/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/yanghe": 'From "By the Yang River 洋河边上", adapted by Zhi Yi 志一, illustrated by Ye Yongsen 叶永森, Tianjin: Tianjin renmin meishu chubanshe, 1974. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/yanghe/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/renyu": 'From "Mermaid 人鱼", written and drawn by He Yongkun 何永坤 and Li Danwu 李旦武, published in <i>Aomi huakan</i> 奥秘画刊 01/1982 (12), pp. 15-18. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/renyu/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/uncle": 'From "My Uncle Jules 我的叔叔于勒", adapted from the French original by Guy de Maupassant by Sun Yufan, illustrated by Pang Bangben, published in <i>Lianhuanhua bao</i> 连环画报 08/1980, pp.13-161. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/uncle/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/nezha": 'From "Nezha Wreaks Havoc in the East Sea 哪吒闹东海", adapted by Bai Yu 白宇, illustrated by Chen Huiguan 陈惠冠, People’s Fine Arts Publishing House, 1985. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/nezha/">here</a>.'
    "https://api.github.com/repos/chinacomx/translations/contents/public/images/bethune/bingconglin": 'From "The Legend of Bing Conglin 冰聪林传奇", written by Und1c1 and Super Crystal Monkey, illustrated by Super Crystal Monkey, Xiaohongshu, 2024. For the full lianhuanhua in original and translation, see <a href="https://chinacomx.github.io/translations/bingconglin/">here</a>.'
};
 
let images = [];
let folderToImagesMap = {};

async function fetchImages() {
  for (let folder of folders) {
    try {
      const response = await fetch(folder);
      
      // 1. Check if the folder actually exists (Status 200 OK)
      if (!response.ok) {
        console.warn(`Skipping folder (Status ${response.status}): ${folder}`);
        continue; // Skip to the next folder, don't crash!
      }

      const data = await response.json();

      // 2. Check if the data is actually an array (sometimes API returns an error object)
      if (!Array.isArray(data)) {
        console.warn(`Skipping folder (Not an array): ${folder}`);
        continue; 
      }

      const folderImages = data.filter(item => item.type === "file").map(item => item.download_url);
      folderToImagesMap[folder] = folderImages;
      images.push(...folderImages);

    } catch (error) {
      console.error(`Error loading ${folder}:`, error);
    }
  }

  // Only run this if we actually found images
  if (images.length > 0) {
    selectRandomImage();
  } else {
    console.error("No images loaded from any folder.");
  }
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
