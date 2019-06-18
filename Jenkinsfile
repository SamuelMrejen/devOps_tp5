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
     stage('docker build/push') {
         docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
           def app = docker.build("samuelmrejen/apptp5:${commit_id}", '.').push()
         }
       }
       
        stage('docker deploy') {
            sh "docker container run --rm -p 3000:3000 --name myapp samuelmrejen/apptp5:${commit_id}"
       }
    
    }