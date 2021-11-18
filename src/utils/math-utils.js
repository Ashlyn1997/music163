export const getRandomNumber = num => {
    return Math.floor(Math.random() * num)
}
export const getFindIdIndex = (arr, findId) => {
    return arr.findIndex(song => song.id === findId)
    // findIndex()返回数组中满足提供的测试函数的第一个元素的索引
}