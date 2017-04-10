var cacheBuilderService = require('./cacheBuilderService');

const filePath = './media/58e286bc1a55674eb2c45c41.mp3';
const trackId = '58eb93df5f97af50c45e401e';

// cacheBuilderService.putCache(filePath, trackId).then(function() {
//     console.log('Written to db')
// }).catch(function(error) {
//     console.error(error);
// });

cacheBuilderService.getCache(trackId).then(function(retrievedTrack) {
    console.log('Got from db ' + retrievedTrack)
}).catch(function(error) {
    console.error(error);
});

// cacheBuilderService.checkCache(trackId).then(function(retrievedTrack) {
//     console.log('Got from db ' + retrievedTrack)
// }).catch(function(error) {
//     console.error(error);
// });
