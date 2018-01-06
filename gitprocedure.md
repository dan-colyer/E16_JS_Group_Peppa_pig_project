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
4. git merge develop (make sure you are in the branch you want to merge into)
5. a) if window pops up, close window and proceed to step 6
5. b) if conflicts fix any conflicts -> git add .  ->git commit -m “resolved conflicts”
6. git push origin feature/blah blah blah
7. go to GitHub and open pull request on github
8. choose the develop branch and request for pull.
    Note: one of the team member will need to review code for proof.
