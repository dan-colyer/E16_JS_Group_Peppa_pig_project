The BBC are looking to improve their online offering of educational content by developing some interactive apps that display information in a fun and interesting way.

Your task is to make an MVP to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app. You might use an API to bring in content or a database to store facts.


Don’t commit without presence and consent of everyone

Confirm your branch and feature

Procedure:
1, git checkout develop
2, git pull origin develop
3, git checkout -b feature/blah blah blah
4, do your code
5, git add .
6, git commit -m “meaningful message”

Steps for merging

1, git checkout develop
2, git pull origin develop
3 git checkout feature/blah
4, git merge develop
5 if window pops up jump to step 8
5 if conflicts fix any conflicts
6 git add .
7 git commit -m “resolved conflicts”
8 git push origin feature/blah blah blah
9 open pull request on github
