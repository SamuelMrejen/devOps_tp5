job('Job 1 Deployment') {
    scm {
        git('https://github.com/SamuelMrejen/devOps_tp5')
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