<?php
session_start();
?>
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
        $calcolatrice = new calcolatrice();
        //echo htmlspecialchars(evalString($_POST["ris"]));
        //echo "\n".htmlspecialchars($_POST["ris"]) 
        if ($_POST) { ?>
            <div class="calcolatrice-container">
                <?php if (isset($_POST['ris'])) { ?>
                    <div id="display">
                        <div id="upperDisplay"><?php echo htmlspecialchars($calcolatrice->evalString($_POST["ris"])); ?></div>
                        <div id="errorDisplay"></div>
                    </div>
                <?php echo $calcolatrice->risToStrDisplay();
                } elseif (isset($_POST['setMem'])) { ?>
                    <div id="display">
                        <div id="upperDisplay"><?php echo htmlspecialchars($calcolatrice->setMem($_POST["setMem"])); ?></div>
                        <div id="errorDisplay"></div>
                        <div id="HiddenDisplay" style="display: none;"><?php echo htmlspecialchars($calcolatrice->getMem()); ?></div>
                    </div> <?php echo $calcolatrice->risToStrDisplay();
                        } elseif (isset($_POST['addMem'])) { ?>
                    <div id="display">
                        <div id="upperDisplay"><?php echo htmlspecialchars($calcolatrice->addMem($_POST["addMem"])); ?></div>
                        <div id="errorDisplay"></div>
                    </div><?php echo $calcolatrice->risToStrDisplay();
                        } elseif (isset($_POST['getMem'])) { ?>
                    <div id="display">
                        <div id="upperDisplay"></div>
                        <div id="errorDisplay"></div>
                    </div>
                    <div id="dom-target" style="display: none;">
                        <?php echo htmlspecialchars($calcolatrice->getMem()); ?></div>
                <?php echo $calcolatrice->memToHiddenDisplay();
                        }
                        include 'Calcolatrice/bottomCalcolatrice.php';
                    } else {  ?>
                <div class="calcolatrice-container">
                    <div id="display">
                        <div id="upperDisplay"></div>
                        <div id="lowerDisplay"></div>
                        <div id="errorDisplay"></div>
                    </div>
                <?php
                        include 'Calcolatrice/bottomCalcolatrice.php';
                    }

                ?>

    </section>
    <footer>

    </footer>
</body>

</html>