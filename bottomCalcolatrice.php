             <div class="vuoto"></div>
             <!--  #divPulsanti   -->
             <div class="coseno"><button class="button" onclick="onClickCos()">cos</button></div>
             <div class="seno"><button class="button" onclick="onClickSin()">sin</button></div>
             <div class="tangente"><button class="button" onclick="onClickTan()">tan</button></div>
             <div class="arcocoseno"><button class="button" onclick="onClickAcos()">acos</button></div>
             <div class="arcoseno"><button class="button" onclick="onClickAsin()">asin</button></div>
             <div class="arcotangente"><button class="button" onclick="onClickAtan()">atan</button></div>
             <div class="logaritmo"><button class="button" onclick="onClickLog()">log10</button></div>
             <div class="logaritmoNaturale"><button class="button" onclick="onClickLn()">ln</button></div>
             <div class="clearAll"><button class="button" onclick="onClickClearAll()">CE</button></div>
             <div class="clearOne"><button class="button" onclick="onClickClearOne()">&lt;-X</button></div>
             <div class="fattoriale"><button class="button" onclick="onClickfatt()">N!</button></div>
             <div class="radiceEnnesima"><button class="button" onclick="onClickRadX()">RadX</button></div>
             <div class="radicequadrata"><button class="button" onclick="onCLickRadQuad()">Rad2</button></div>
             <div class="elevementoEnnesimo"><button class="button" onclick="onClickElevX()">N^X</button></div>
             <div class="elevementoQuadrato"><button class="button" onclick="onClickElevQuad()">N^2</button></div>
             <div class="reciproco"><button class="button" onclick="onClickRec()">1/X</button></div>
             <div class="piumeno"><button class="button" onclick="onClickpiumeno()">+/-</button></div>
             <div class="uno"><button class="button" onclick="onClickUno()">1</button></div>
             <div class="due"><button class="button" onclick="onClickDue()">2</button></div>
             <div class="tre"><button class="button" onclick="onClickTre()">3</button></div>
             <div class="quattro"><button class="button" onclick="onClickQuattro()">4</button></div>
             <div class="cinque"><button class="button" onclick="onClickCinque()">5</button></div>
             <div class="sei"><button class="button" onclick="onClickSei()">6</button></div>
             <div class="sette"><button class="button" onclick="onClickSette()">7</button></div>
             <div class="otto"><button class="button" onclick="onClickOtto()">8</button></div>
             <div class="nove"><button class="button" onclick="onClickNove()">9</button></div>
             <div class="zero"><button class="button" onclick="onCLickZero()">0</button></div>
             <div class="addizione"><button class="button" onclick="onClickadd()">+</button></div>
             <div class="sottrazione"><button class="button" onclick="onCLicksott()">-</button></div>
             <div class="moltiplicazione"><button class="button" onclick="onClickmol()">*</button></div>
             <div class="divisione"><button class="button" onclick="onClickDiv()">/</button></div>
             <div class="virgola"><button class="button" onclick="onClickVirg()">.</button></div>
             <div class="apriPar"><button class="button" onclick="onClickOpenPar()">(</button></div>
             <div class="chiudiPar"><button class="button" onclick="onClickClosePar()">)</button></div>
             <div class="esp"><button class="button" id="esp" onclick="onClickEsp()" disabled>esp</button></div>
             <!--  #divPulsanti   -->

             <!--  #memPulsanti   -->
             <div class="getMem">
                     <form action="index.php" method="POST">
                             <input type="hidden" id="getMem" name="getMem" value="" />
                             <input type="submit" name="Mem" value="MEM" class="button" onclick="onClickGetMem()">
                     </form>
             </div>
             <div class="setMem">
                     <form action="index.php" method="POST">
                             <input type="hidden" id="setMem" name="setMem" value="" />
                             <input type="submit" name="stoMem" value="STO" class="button" onclick="onClickSetMem()">
                     </form>
             </div>
             <div class="addMem">
                     <form action="index.php" method="POST">
                             <input type="hidden" id="addMem" name="addMem" value="" />
                             <input type="submit" name="M+" value="M+" class="button" onclick="onClickaddMem()">
                     </form>
             </div>
             <!--  #memPulsanti   -->
             <div class="uguale">
                     <form action="index.php" method="POST">
                             <input type="hidden" id="ris" name="ris" value="" />
                             <input type="submit" name="uguale" value="=" class="button" onclick="onClickUguale()">
                     </form>
             </div>
             </div>