module.exports = [
  {
    key: 'hackernews-articles',
    url: 'https://news.ycombinator.com/news?p=<%= state.currentPage %>',

    scraper: function ($) {
      const currentPage = $('.rank').last().text() / 30

      const data = {
        items: [],
        jobs: [],
        hasNextPage: currentPage < 5
      }

      $('tr.athing').each((i, row) => {
        data.items.push({
          key: $(row).attr('id'),
          title: $(row).find('a.storylink').text(),
          href: $(row).find('a.storylink').attr('href'),
          postedBy: $(row).find('a.hnuser').text()
        })

        data.jobs.push({
          routeId: 'hackernews-post',
          query: {
            id: $(row).attr('id')
          }
        })
      })

      return data
    }
  }, {
    key: 'hackernews-post',
    url: 'https://news.ycombinator.com/item?id=<%= query.id %>',
    scraper: function ($) {
      var $post = $('tr.athing').first()

      return {
        items: [{
          key: $post.attr('id'),
          title: $post.find('.title a').text(),
          href: $post.find('.title a').attr('href'),
          postedBy: $post.find('.hnuser').text(),
          bestComment: $('.comment').first().text()
        }]
      }
    }
  }
]
