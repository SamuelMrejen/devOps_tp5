node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   
   stage('install') {
     nodejs(nodeJSInstallationName: 'NodeJS12') {
       sh 'npm install'
     }
   }

    stage('build image ') {
        sh 'docker image build -t myapp:1.0 .'
   }
   
     stage('test') {
     nodejs(nodeJSInstallationName: 'NodeJS12') {
       sh 'npm test'
     }
   }
     stage('linter install') {
     nodejs(nodeJSInstallationName: 'NodeJS12') {
       sh 'npm i -g eslint'
     }
   }
    stage('test linte') {
     nodejs(nodeJSInstallationName: 'NodeJS12') {
       sh 'eslint --no-eslintrc index.js'
     }
   }

   
   
//    stage('docker build/push') {
//      docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
//        def app = docker.build("akasam/nodedemoapp:${commit_id}", '.').push()
//      }
//    }
}