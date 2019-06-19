#TP n5 Dockerfile / jenkins

##Fichers
Le repertoire contient:
un fichier index.js pour le lancement du projet  nodejs
Un fichier index.test.js qui contient les tests unitaire

Jenkins:
Il ya un fichier Jenkinsfile pour la pipeline preprod
Il ya un fichier JenkinsfileProd pour la pipeline Prod
--Il ya un fichier  job.groovy pour lancer les job mais c'etait avant d'utiliser les Jenkinsfile donc il ne sert plus--
Il ya un Dockerfile qui permet le build de l'image nodejs(version 12)


##Etapes à suivre

Lancer un container Jenkins.

*docker run -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkins/jenkins:lts*

Dans le container Jenkins installer Docker pour pouvoir realiser du Docker in Docker.

Faire l'installation Jenkins sur votre adresse.

Creer un nouveau job sur lequelle sera present la pipeline. 
Dans la configuration de la pipeline preciser le lien du repo git, et le nom du Jenkinsfile à lire pour réaliser la pipeline (fichier Jenkinsfile  pour la preprod et  Jenkinsfileprod pour la prod).

Build la pipeline