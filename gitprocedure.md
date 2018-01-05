Don’t commit without presence and consent of everyone

Confirm your branch and feature

##Procedure:

1. git checkout develop
2. git pull origin develop
3. git checkout -b feature/blah blah blah
4. do your code
5. git add .
6. git commit -m “meaningful message”

## Steps for merging

1. git checkout develop
2. git pull origin develop
3. git checkout feature/blah
4. git merge develop
* (if window pops up jump to step 8)
5. if conflicts fix any conflicts
6. git add .
7. git commit -m “resolved conflicts”
8. git push origin feature/blah blah blah
9. open pull request on github
