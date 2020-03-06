1. 建立檔案 Dockerfile 及 .dockerignore(在 /HW2)
2. Dockerfile 設定好後建立 image
```
docker build -t calculator .
```
3. 確認是否建立成功
```
docker images
```
4. 建立容器，映射到 5000 port，並命名為 calculator
```
docker run -p 5000:5000 --name calculator -d calculator
```
5. 查看容器狀態，狀態為 **Up** 即成功
```
docker ps -a
```
6. 開啟 http://localhost:5000/