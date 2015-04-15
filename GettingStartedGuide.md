# Introduction #

This guide will, hopefully, allow you to easily download every piece of software you need and configure everything you need in order to be successful and get started on the class project.

# Step 1 - XAMPP #

XAMPP is the run-time environment we’ll use for the class project.

Download here: https://www.apachefriends.org/index.html

Choose the appropriate OS and install.

After installation activate both Apache and MySQL to make sure they work.

Note: Skype uses the same ports as Apache. You need to quit Skype, activate Apache, and then bring Skype back up if you want them both running at the same time.


# Step 2 - Set Up httpd.conf File #

In XAMPP, beside Apache, click on the 'Config' button and open 'httpd.conf'.


Search for `DocumentRoot` which should look like:
```
DocumentRoot "C:/xampp/htdocs"
<Directory "C:/xampp/htdocs">
```
Replace it with:
```
DocumentRoot "C:\devel\web\php"
<Directory "C:\devel\web\php">
```
Then search for `<IfModule alias_module>` and replace the whole thing with the following:
```
<IfModule alias_module>
    #
    # Redirect: Allows you to tell clients about documents that used to 
    # exist in your server's namespace, but do not anymore. The client 
    # will make a new request for the document at its new location.
    # Example:
    # Redirect permanent /foo http://www.example.com/bar

    #
    # Alias: Maps web paths into filesystem paths and is used to
    # access content that does not live under the DocumentRoot.
    # Example:
    # Alias /webpath /full/filesystem/path
    #
    # If you include a trailing / on /webpath then the server will
    # require it to be present in the URL.  You will also likely
    # need to provide a <Directory> section to allow access to
    # the filesystem path.

    #
    # ScriptAlias: This controls which directories contain server scripts. 
    # ScriptAliases are essentially the same as Aliases, except that
    # documents in the target directory are treated as applications and
    # run by the server when requested rather than as documents sent to the
    # client.  The same rules about trailing "/" apply to ScriptAlias
    # directives as to Alias.
    #
    ScriptAlias /cgi-bin/ "C:/xampp/cgi-bin/"

Alias /nhvbsr "C:/devel/web/php/nhvbsr"
	<Directory "C:/devel/web/php/nhvbsr">
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted
    </Directory>
</IfModule>
```

# Step 3 - Tortoise SVN #

Now that XAMPP is configured properly, you need to download the actual source files.

Download and install Tortoise SVN - http://tortoisesvn.net/downloads.html

In the folder you created, "C:/devel/web/php/nhvbsr", right click the folder and use the Tortoise SVN's Import ability. It will ask for a URL, use the following:
```
https://unhm-nhvbsr.googlecode.com/svn/trunk
```
You may need to create an account. Work with Professor Nelson if you have issues viewing and downloading the files.


# Step 4 - Installing the Database #

The database is already a part of the files you downloaded, it simply needs to be installed into the XAMPP MySQL server.

Make sure Apache and and MySQL are activated and running on XAMPP before continuing.


In XAMPP, click on the 'Shell' button to open up a command prompt ready for MySQL commands.

Type the following, ignoring anything with a # in front of it:
```
mysql -u root
```
The above command activates mysql and gives you the appropriate permissions to do what you're about to do.

Next, you need to bring in the database, create the tables, etc. You can do this a number of ways. The easiest way is to open up the database in NotePad++ copy everything, paste it directly into the cmd prompt, and hit enter. Otherwise you can use a mysql command to pull in the file. The choice is yours.

If successful, it should start working and adding content to the running database.

# Step 5 - Quick Test #

We now have completed enough steps to actually test it. In your web browser, type in 'localhost' with Apache and MySQL running.

If you've done everything correctly, it should bring up a root directory. Choose NHVBSR, and that should take you into a login screen.


# Step 6 - Eclipse #

In order to view the code, we will use Eclipse for PHP. You can download that here:
```
http://www.eclipse.org/downloads/packages/eclipse-php-developers/lunasr1
```
Again, make sure you install the correct version for your OS.

Once installed, you need to designate a workspace. Use the following:
```
c:/devel/web/php/unhm_nhvbsr/php
```
Next part - No idea!

# Step 7 - XDebug for Eclipse #

I have no idea how to do this. Someone else write the guide.



Credit to Forest for helping figure out the steps!