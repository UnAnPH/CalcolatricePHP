<?php
session_start();
?>
<html>

<head>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="JS/script.js"></script>
    <?php include_once 'Calcolatrice.php'; ?>
</head>

<body>
    <header></header>

    <section>
    <?php $calcolatrice = new calcolatrice();
        $_SESSION["mem"]; ?>
        <div class="calcolatrice-container">
            <div id="display">
                <div id="mDisplay"><?php echo htmlspecialchars($calcolatrice->displayM()); ?> </div>
                <div id="errorDisplay"></div>
                <?php
                
                if ($_POST) { ?>
                    <?php if (isset($_POST['ris'])) { ?>
                        <div id="upperDisplay"><?php echo htmlspecialchars($calcolatrice->evalString($_POST["ris"])); ?></div>
                    <?php echo $calcolatrice->risToStrDisplay();
                    } elseif (isset($_POST['setMem'])) { ?>
                        <div id="upperDisplay"><?php echo htmlspecialchars($calcolatrice->setMem($_POST["setMem"])); ?> </div>
                        <div id="HiddenDisplay" style="display: none;"><?php echo htmlspecialchars($calcolatrice->getMem()); ?></div>
                    <?php echo $calcolatrice->risToStrDisplay();
                    } elseif (isset($_POST['addMem'])) { ?>
                        <div id="upperDisplay"><?php echo htmlspecialchars($calcolatrice->addMem($_POST["addMem"])); ?></div>
                    <?php echo $calcolatrice->risToStrDisplay();
                    } elseif (isset($_POST['getMem'])) { ?>
                        <div id="upperDisplay"></div>
                        <div id="dom-target" style="display: none;">
                            <?php echo htmlspecialchars($calcolatrice->getMem()); ?></div>
                    <?php echo $calcolatrice->memToHiddenDisplay();
                    }
                } else {  ?>
                    <div id="upperDisplay"></div>
            
        <?php
                }?>
                </div> <?php
                include 'bottomCalcolatrice.php';
        ?>
        </div>
    </section>
    <footer>

    </footer>
</body>

</html>