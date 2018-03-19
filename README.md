# github page 이용하기

새로운 브렌치를 만들고 해당 브렌치로 푸쉬하면 된다.

새로운 브렌치 만들기

```shell
git checkout --orphan gh-pages
```

작업한다.


새로운 브렌치로 푸쉬한다.

```shell
git add .
git commit -m "commit"
git push origin gh-pages
```

아래페이지로 이동하면 볼수 있다.

https://아이디.github.io/저장소이름/

해당저장소의 이름이 gitpage-test 이므로 [https://demun.github.io/gitpage-test/](https://demun.github.io/gitpage-test/) 로 볼수 있다.