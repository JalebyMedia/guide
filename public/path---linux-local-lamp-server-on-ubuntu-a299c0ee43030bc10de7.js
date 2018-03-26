webpackJsonp([0x5bcfaf788f59900],{"./node_modules/json-loader/index.js!./.cache/json/linux-local-lamp-server-on-ubuntu.json":function(e,t){e.exports={data:{markdownRemark:{html:"<h2>Local LAMP Server on Ubuntu</h2>\n<p>The purpose of this brief guide is to take you through the process of setting up a LAMP (Linux, Apache, MySQL, PHP) server on a local Ubuntu Linux machine or virtual machine.  This will allow a developer to develop using PHP and MySQL (with phpMyAdmin). This is a common stack that is necessary for Wordpress development.</p>\n<h3>Install the necessary packages</h3>\n<p> You will need to install the following packages for the LAMP server.  You can install them all at once by separating each package by a space, or one at a time like shown.  I prefer to download one at a time because it is easier to see if there were any errors. Enter the terminal and type the following:</p>\n<ul>\n<li><code>sudo apt-get install apache2</code></li>\n<li><code>sudo apt-get install php</code></li>\n<li><code>sudo apt-get install php-mysql</code></li>\n<li><code>sudo apt-get install mysql-server</code></li>\n</ul>\n<p>You should then be prompted to set a password for the MySQL root user. After setting the password continue to install:</p>\n<ul>\n<li><code>sudo apt-get install libapache2-mod-php</code></li>\n<li><code>sudo apt-get install php-mcrypt</code></li>\n<li><code>sudo apt-get install phpmyadmin</code></li>\n</ul>\n<p>You should then be prompted which server to use select apache by pressing enter.\nSelect no for advanced server setup.</p>\n<h3>Change permissions to the /var/www/html</h3>\n<p>In order for php scripts and files to be run by the LAMP server they need to be saved in the /var/www/html directory.  You can think of this location as your local server.  In order to make changes to this directory we need to change the permissions on it.  In the terminal enter the command:</p>\n<ul>\n<li><code>sudo chown {your ubuntu username} /var/www/html</code></li>\n</ul>\n<h3>Create a symbolic link to phpMyAdmin</h3>\n<p>By default, phpMyAdmin is installed in the /usr/share/ directory.  We need to move it to our local server directory. We navigate to the server directory that we want the link in by:</p>\n<ul>\n<li><code>cd /var/www/html</code></li>\n</ul>\n<p>Then create the link by entering the command:</p>\n<ul>\n<li><code>ln -s /usr/share/phpmyadmin phpmyadmin</code></li>\n</ul>\n<h3>Restart Apache and test</h3>\n<p>Run the following command to restart Apache setting the changes that were made:</p>\n<ul>\n<li><code>sudo systemctl restart apache2</code></li>\n</ul>\n<p>You should then be able to create an info.php file in the /var/www/html directory.</p>\n<ul>\n<li><code>touch /var/www/html/info.php</code></li>\n</ul>\n<p>In the file type the following php code:</p>\n<ul>\n<li><code>&#x3C;?php phpinfo(); ?></code></li>\n</ul>\n<p>Then, open a browser and type in localhost/info.php\nYou should see a page from the php file you just wrote that gives you information about php.</p>\n<p>Finally, to access phpMyAdmin go to localhost/phpmyadmin in your browser.  The defualt root username is ‘root’ and the password is the password you chose earlier for the MySQL database.</p>\n<h3>More Information</h3>\n<!-- Insert helpful links here -->",fields:{slug:"/linux/local-lamp-server-on-ubuntu/"},frontmatter:{title:"local-lamp-server-on-ubuntu"}}},pathContext:{slug:"/linux/local-lamp-server-on-ubuntu/"}}}});
//# sourceMappingURL=path---linux-local-lamp-server-on-ubuntu-a299c0ee43030bc10de7.js.map