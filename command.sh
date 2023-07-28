# REPO_URL <https://github.com/Pavanmenugonda/BLACKBIRD>

1.npx create-react-app my-app

2.cd my-app

3.git init

  git add .

  git commit -m "Initial commit"

4.gh repo create Pavanmenugonda/my-app --public --confirm

5.git add .

  git commit -m "UPDATE-LOGO"

  git push origin update_logo

6.gh pr create --base main --head update_logo --title "UPDATE-LOGO"

7.gh pr merge --auto --merge --merge "UPDATE-LOGO" --user Pavanmenugonda --repo my-app

8.gh pr create --base main --head update_logo --title "UPDATE-LOGO"

9.gh pr merge --auto --merge "UPDATE LOGO" --user Pavanmenugonda --repo my-app


