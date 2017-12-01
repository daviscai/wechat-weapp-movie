// var douban = require('../../comm/script/fetch')
// var config = require('../../comm/script/config')

var app = getApp()
Page({
	data: {
    showCommentPopup: false,
    showStoryPopup: false
	},
  // 页面加载
	onLoad: function() {
		var that = this
	},
  // 下拉加载更多
	onPullDownRefresh: function() {
	
	},
  // 上拉加载更多
	onReachBottom: function() {
		
	},

  toggleCommentPopup() {
    this.setData({
      showCommentPopup: !this.data.showCommentPopup
    });
  },

  toggleStoryPopup() {
    this.setData({
      showStoryPopup: !this.data.showStoryPopup
    });
  }

	// viewFilmDetail: function(e) {
	// 	var data = e.currentTarget.dataset;
	// 	wx.navigateTo({
	// 		url: "../filmDetail/filmDetail?id=" + data.id
	// 	})
	// },	
	// viewFilmByTag: function(e) {
	// 	var data = e.currentTarget.dataset
	// 	var keyword = data.tag
	// 	wx.navigateTo({
	// 		url: '../searchResult/searchResult?url=' + encodeURIComponent(config.apiList.search.byTag) + '&keyword=' + keyword
	// 	})
	// },
	// viewBannerDetail: function(e) {
	// 	var data = e.currentTarget.dataset
	// 	if (data.type == 'film') {
	// 		wx.navigateTo({
	// 			url: "../filmDetail/filmDetail?id=" + data.id
	// 		})
	// 	} else if (data.type == 'person') {
	// 		wx.navigateTo({
	// 			url: '../personDetail/personDetail?id=' + data.id
	// 		})
	// 	} else if (data.type == 'search') {
	// 		// stype(searchType) 0:关键词, 1:类型标签
	// 		var searchUrl = stype == 'keyword' ? config.search.byKeyword : config.search.byTag
	// 		wx.navigateTo({
	// 			url: '../searchResult/searchResult?url=' + encodeURIComponent(searchUrl) + '&keyword=' + keyword
	// 		})
	// 	}
	// },
	// viewSearch: function() {
	// 	wx.navigateTo({
	// 		url: '../search/search'
	// 	})
	// }
})