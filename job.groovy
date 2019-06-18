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
        shell("npm test")
        
    }
}