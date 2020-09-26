#removing unwanted directories and files
rm -rf node_modules public src lib test package.json package-lock.json

pwd

#cloning frontend
git clone https://github.com/sukhiboi/blog-frontend.git;

#creating react build
cd blog-frontend;
npm install;
npm test;
npm run build;

#cloning build to root
mv build ../build;

#deleting frontend
pwd
cd ..;
pwd
rm -rf blog-frontend;
ls

#cloning backend
git clone https://github.com/sukhiboi/blog-backend.git;

cd blog-backend;
npm install;
npm test;
rm -rf node_modules;

#cloning backend to root
cd ..;
ls
cp -R ./blog-backend/* .;

#deleting backend
rm -rf blog-backend;

ls