#removing unwanted directories and files
rm -rf node_modules public src lib test package.json package-lock.json

#cloning frontend
git clone https://github.com/sukhiboi/blog-frontend.git frontend;

#creating react build
cd frontend;
npm install;
npm test;
npm run build;
cd ..;

#cloning backend
git clone https://github.com/sukhiboi/blog-backend.git backend;

cd backend;
npm install;
npm test;

#cloning build to root
mv ./../frontent/build ./build;
rm -rf node_modules;
cd ..;

#cloning backend to root
cp -R ./backend/* .;

#deleting backend
rm -rf backend;
rm -rf frontend;

echo 'here\n' && ls