from icrawler.builtin import BingImageCrawler
for keyword in ['greyhound']:  
    google_crawler = BingImageCrawler(
        parser_threads=2,
        downloader_threads=4,
        storage={'root_dir': 'images/{}'.format(keyword)}  
   
    )
    google_crawler.crawl(
        keyword=keyword, max_num=1000, min_size=(200, 200))  
