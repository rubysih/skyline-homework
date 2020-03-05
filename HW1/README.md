### 請說明什麼是 git Sub-module , 使用時機與實際演練該如何使用
git Sub-module 是在專案中引用其他專案的一種方式，概念同 npm 等套件管理工具。
當專案需要引用其他專案的時候，可用 git Sub-module 的方式，這樣比較好維護，且不會有載錯版本的問題，當引用的專案更新時也可以很快速地一併更新。

- 新增 submodule : 
```
git submodule add submodule_url folder_path 
```
會新增一個檔案 **.gitmodules**，為 submodule 的設定檔
- 初始化，將 **.gitmodules** 中的設定寫入 **.git/config**
```
git submodule init
```
- 下載 submodule
```
git submodule update
```
- 在 clone 專案時就處理好上述兩步驟
```
git clone --recurse-submodules main_project_url
```
- 一次更新所有 submodule
```
git submodule foreach --recursive git pull origin master
```
