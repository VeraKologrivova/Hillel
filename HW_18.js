/**
 * Проекцией при работе с данными называется операция, при которой из
 * большой таблицы мы берем только некоторые поля из каждого элемента.
 * Ниже вы найдете массив объектов (таблицу) с данными по фильмам.
 * Необходимо создать новый массив, в котором вместо полновесных 
 * элементов будут упрощенные объекты, состоящие только из id и title
 *
 * Для каждого видео создайте новый объект в состоящий из 
 * id и title, либо создайте пустой объект и добавьте в него
 * нужные поля.  
 * Pезультаты сложите в массив videoAndTitlePairs
 */


const newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
],
videoAndTitlePairs = [];

newReleases.forEach(function(item) {
    let videoData = [];
    videoData.push(item.id, item.title);
    videoAndTitlePairs.push(videoData);
});

console.log(videoAndTitlePairs);