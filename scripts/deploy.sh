cd ../
rm -rf docs
npm run build
mv -f dist docs
# copy CNAME in docs directory
# cat CNAME >> docs/CNAME
git add .
git commit -m"update"
git push -f
