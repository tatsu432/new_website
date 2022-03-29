<?php
$fp = fopen('..\CSV\data.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    fputcsv($fp, [$_POST['name'], $_POST['comment']]);
    rewind($fp);
}
while ($row = fgetcsv($fp)) {
    $rows[] = $row;
}
fclose($fp);
?>

<!DOCTYPE html>
<html lang="en">
    <head>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215062524-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-215062524-1');
        </script>
        <link rel="icon" href="..\images\favicon .ico">

        <link rel="stylesheet" type="text/css" href="..\CSS\slick.css"/>
        <link rel="stylesheet" type="text/css" href="..\CSS\slick-theme.css"/>
        <link rel="stylesheet" type="text/css" href="..\CSS\common.css"/>
        <link rel="stylesheet" href="..\CSS\main2.css">

        <!-- drawer.css -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/css/drawer.min.css">
        <!-- jquery &amp; iScroll -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.2.0/iscroll.min.js"></script>
        <!-- drawer.js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/js/drawer.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script>
            $(document).ready(function() {
            $('.drawer').drawer();
            });
        </script> 

        <meta charset="UTF-8">
        <link href="keijiban.css" rel="stylesheet" type="text/css" media="all">
        <title>Bulletin Board</title>

    </head>

    <body class="drawer drawer--right">
        <header role="banner"> <button type="button" class="drawer-toggle drawer-hamburger">
        <span class="sr-only">toggle navigation</span>
        <span class="drawer-hamburger-icon"></span>
        </button>
            <nav class="drawer-nav" role="navigation">
                <ul class="drawer-menu">
                    <li><a class="drawer-brand" href=".\index.html">Home</a></li>
                    <li><a class="drawer-menu-item" target="_blank" href="./intro.html">My Introduction</a></li>
                    <li class="drawer-dropdown"><a class="drawer-menu-item" target="_blank" href="./kendama.html" data-toggle="dropdown">Kendama <span class="drawer-caret"></span></a>
                    <ul class="drawer-dropdown-menu">
                    <li><a class="drawer-dropdown-menu-item" target="_blank" href="./kendama.html">Kendama Introduction</a></li>
                        <li><a class="drawer-dropdown-menu-item" target="_blank" href="./kendama_dan.html">Dan Level Tricks</a></li>
                        <li><a class="drawer-dropdown-menu-item" target="_blank" href="./kendama_aerial.html">Aerial Tricks</a></li>
                        <li><a class="drawer-dropdown-menu-item" target="_blank" href="./kendama_advanced.html">Advanced Tricks</a></li>
                        <li><a class="drawer-dropdown-menu-item" target="_blank" href="./kendama_rec.html">Recommended Tricks</a></li>
                    </ul>
                    </li>
                    <li><a class="drawer-menu-item" target="_blank" href="./film.html">Film reccomendation</a></li>
                    <li><a class="drawer-menu-item" target="_blank" href="http://shimizu432.php.xdomain.jp/works/bbs.php">Bulltein Board</a></li>
                </ul>
            </nav>
        </header>
        <main role="main">
            <!-- Page content -->
        </main>

        <h1>Bulletin Board</h1>

        <div class="slider">
            <div class="slider_item"><img alt="画像3" src="..\images\bulletin4.png" /></div>
            <div class="slider_item"><img  src="..\images\bulletin1.png" /></div>
            <div class="slider_item"><img alt="画像1" src="..\images\bulletin3.png" /></div>
            <div class="slider_item"><img  src="..\images\bulletin2.jpg" /></div>
        </div>

        <div class="container">
        <section>
            <form id="form">
                <select name="select">
                    <option value="bbs_ja.php">日本語</option>
                    <option value="bbs.php">English</option>
                </select>
            </form>
        </section>
        </div><!-- /.container -->

        <time id="modify"></time>
        <script src="..\JS\update_day.js">
        </script>

        <section>
            <h2>New Post</h2>
            <form action="" method="post">
                <div class="name"><span class="label">Your Name:</span><input type="text" name="name" value=""></div>
                <div class="honbun"><span class="label">Content:</span><textarea name="comment" cols="30" rows="3" maxlength="80" wrap="hard" placeholder="Type within 80 characters"></textarea></div>
                <input type="submit" value="post">
            </form>
        </section>
        <section class="toukou">
            <h2>Posts List</h2>
        <?php if (!empty($rows)): ?>
            <ul>
        <?php foreach ($rows as $row): ?>
                <li><?=$row[1]?> (<?=$row[0]?>)</li>
        <?php endforeach; ?>
            </ul>
        <?php else: ?>
            <p>There is no post.</p>
        <?php endif; ?>
        </section>

        <!-- ボタンに変換される -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

        <h2>Share this article</h2>
        <ul class="follow-me">
          <li><a href="https://twitter.com"></a></li>
          <li><a href="https://www.facebook.com"></a></li>
          <li><a href="https://www.youtube.com"></a></li>
          <li><a href="https://www.instagram.com"></a></li>
        </ul>

        <a class="a1" href="http://shimizu432.html.xdomain.jp/works/index.html"
        target="_blank" rel="noopener noreferrer">Click here to get back to Home Page</a>

        <script src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"></script>
        <script type="text/javascript" src="..\JS\slick.min.js"></script>
        <script type="text/javascript" src="..\JS\common.js"></script>
        <script src="..\JS\iscroll.js"></script>
        <script src="..\JS\drawer.js"></script>
        <script src="..\JS\language_bbs.js"></script>
    </body>
</html>