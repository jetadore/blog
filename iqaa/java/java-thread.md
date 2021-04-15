# Java 线程相关面试题


- 线程池

    -  Executors.newCahcedThreadPool()
    -  Executors.newFixedThreadPool()
    -  Executors.newSingleThreadExecutor()
    -  Executors.newScheduledThreadPool()
    -  Alibaba ->
        ```java
        private static ExecutorService executor = new ThreadPoolExecutor(10, 10,
          60L, TimeUnit.SECONDS,
          new ArrayBlockingQueue(10));
        ```