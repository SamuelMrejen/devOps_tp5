job('Job 1 Deployment') {
    scm {
        git('https://github.com/SamuelMrejen/devOps_tp5'){ node -> 
            node / gitConfigName('SamuelMrejen')
            node / gitConfigEmail('samuel.mrejen@ynov.com')
        }
    }
    triggers {
        scm('H/10 * * * *')
    }
    wrappers {
        nodejs('NodeJS12')
    }
    steps {
        shell("npm install")
        shell("docker build -t node:1.0 .")
        shell("docker container run --rm --name myappTp5 -p 3000:3000 node:1.0")
        shell("npm test")
        
    }
}