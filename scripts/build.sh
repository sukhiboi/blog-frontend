#cloning frontend
git clone https://github.com/sukhiboi/blog-frontend.git 2> /dev/null;

#creating react build
cd blog-frontend;
npm install 2> /dev/null;
npm test;
npm run build 2> /dev/null;

#cloning build to root
mv build ../build;

#deleting frontend
cd ..;
rm -rf blog-frontend;

#cloning backend
git clone https://github.com/sukhiboi/blog-backend.git 2> /dev/null;

cd blog-backend;
npm install 2> /dev/null;
npm test;
echo 'ran tests'
rm -rf node_modules;
echo 'delete modules'

#cloning backend to root
echo 'copying build and server to root'
cp -R ./* ..;

#deleting backend
cd ..;
ls
pwd
rm -rf blog-backend;
echo 'deleting backend'

rm -rf node_modules;