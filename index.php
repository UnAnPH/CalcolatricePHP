<html>
    <head>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="script.js"></script>
    <?php include_once 'Calcolatrice.php'; ?>
    </head>

    <body>
        <header></header>
            
        <section>

            <?php
                if($_POST){?>
                     <div class="calcolatrice-container"> 
                    <?php if (isset($_POST['ris'])) { ?>
                        <div id="display"><?php echo htmlspecialchars(evalString($_POST["ris"])); ?></div>
                    <?php echo risToStrDisplay(); }
                    elseif (isset($_POST['setMem'])) { ?>
                        <div id="display"></div> <?php 
                    }elseif (isset($_POST['addMem'])){ ?>
                        <div  id="display"></div><?php 
                    }elseif (isset($_POST['getMem'])){?>
                        <div  id="display"></div>
                        <div id="dom-target" style="display: none;"> 
                        <?php echo htmlspecialchars($output); ?></div> <?php
                    }
                     include 'Calcolatrice/bottomCalcolatrice.php'; 

                } else{  ?>
                    <div class="calcolatrice-container">
                    <div  id="display"></div>
                    <?php include 'Calcolatrice/bottomCalcolatrice.php'; 
                     } 
            ?>

                </section>
        <footer>

        </footer>
    </body>
</html>