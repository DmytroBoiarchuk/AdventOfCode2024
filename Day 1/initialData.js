const initialData = '56208   95668\n' +
    '52621   74203\n' +
    '95252   33335\n' +
    '79799   26047\n' +
    '88005   37435\n' +
    '61887   93836\n' +
    '48454   95821\n' +
    '62543   40154\n' +
    '68631   73255\n' +
    '76702   79056\n' +
    '70838   34466\n' +
    '18680   46550\n' +
    '51787   55754\n' +
    '37646   48228\n' +
    '85603   29306\n' +
    '37768   75105\n' +
    '90135   21612\n' +
    '35469   74470\n' +
    '21245   49622\n' +
    '18699   49193\n' +
    '21078   61415\n' +
    '10873   95775\n' +
    '91781   60483\n' +
    '56840   42667\n' +
    '81094   12954\n' +
    '71762   61434\n' +
    '64670   22232\n' +
    '33536   77827\n' +
    '24607   75889\n' +
    '37829   78341\n' +
    '36203   82413\n' +
    '31747   95700\n' +
    '22170   79056\n' +
    '28403   89045\n' +
    '82265   37081\n' +
    '10713   74405\n' +
    '76191   43205\n' +
    '99737   87526\n' +
    '75120   72550\n' +
    '82607   40971\n' +
    '81396   47693\n' +
    '11533   39908\n' +
    '21138   40655\n' +
    '97567   42427\n' +
    '11179   89506\n' +
    '19548   50064\n' +
    '43080   93836\n' +
    '90155   37743\n' +
    '21664   58398\n' +
    '90621   89990\n' +
    '52392   94519\n' +
    '82246   62358\n' +
    '14857   73475\n' +
    '56878   69951\n' +
    '48921   56211\n' +
    '49545   83117\n' +
    '84329   12955\n' +
    '71390   48442\n' +
    '27461   28450\n' +
    '94969   86731\n' +
    '32344   14652\n' +
    '89304   37435\n' +
    '61343   61730\n' +
    '38097   85797\n' +
    '21480   31806\n' +
    '79330   58398\n' +
    '29803   73475\n' +
    '83903   58398\n' +
    '82961   37081\n' +
    '19048   16800\n' +
    '46338   45021\n' +
    '65120   97811\n' +
    '94574   18471\n' +
    '43129   37435\n' +
    '80135   20553\n' +
    '13860   30053\n' +
    '23228   37081\n' +
    '75373   99812\n' +
    '72438   43358\n' +
    '62029   81330\n' +
    '46550   11995\n' +
    '86921   92694\n' +
    '34790   20959\n' +
    '98862   85030\n' +
    '82648   53872\n' +
    '23156   43559\n' +
    '86507   43025\n' +
    '78535   78226\n' +
    '86410   58158\n' +
    '23699   18312\n' +
    '43083   25346\n' +
    '69925   11280\n' +
    '93761   82246\n' +
    '31314   38097\n' +
    '31775   47098\n' +
    '50720   24867\n' +
    '59647   66769\n' +
    '95275   17550\n' +
    '12756   82744\n' +
    '93464   99949\n' +
    '50801   55400\n' +
    '12063   60335\n' +
    '10930   12955\n' +
    '96820   63957\n' +
    '51672   40727\n' +
    '35874   40727\n' +
    '23608   79584\n' +
    '94056   80438\n' +
    '46387   50916\n' +
    '34304   37081\n' +
    '83311   93836\n' +
    '25295   43512\n' +
    '17263   63763\n' +
    '70673   30357\n' +
    '68716   11280\n' +
    '52238   27269\n' +
    '99670   49467\n' +
    '50516   93196\n' +
    '84006   78719\n' +
    '61795   33177\n' +
    '43228   87640\n' +
    '77557   99949\n' +
    '98130   64716\n' +
    '96939   61786\n' +
    '95849   79056\n' +
    '16209   89990\n' +
    '65420   44437\n' +
    '94486   11280\n' +
    '66223   99949\n' +
    '43524   86363\n' +
    '62859   61786\n' +
    '90225   84321\n' +
    '88954   98335\n' +
    '75285   17907\n' +
    '38457   73475\n' +
    '42857   24650\n' +
    '10995   32077\n' +
    '91376   57464\n' +
    '77255   90595\n' +
    '89361   86284\n' +
    '59270   46550\n' +
    '71756   57794\n' +
    '87966   17022\n' +
    '58398   55419\n' +
    '96091   37435\n' +
    '17150   87526\n' +
    '39389   12196\n' +
    '76990   67087\n' +
    '61924   34998\n' +
    '95291   73475\n' +
    '50147   84321\n' +
    '53391   84401\n' +
    '36506   93836\n' +
    '52291   27344\n' +
    '12731   50538\n' +
    '60534   89078\n' +
    '79539   10368\n' +
    '56787   99949\n' +
    '54143   40727\n' +
    '98095   75373\n' +
    '30744   52795\n' +
    '12926   38097\n' +
    '51613   50801\n' +
    '36198   65515\n' +
    '28401   27065\n' +
    '56046   78440\n' +
    '70329   71912\n' +
    '95114   36977\n' +
    '60740   47082\n' +
    '56549   11280\n' +
    '57725   26874\n' +
    '56639   89045\n' +
    '79567   29741\n' +
    '94022   76570\n' +
    '96358   90832\n' +
    '12302   95795\n' +
    '76023   82246\n' +
    '15612   97271\n' +
    '17185   90595\n' +
    '46709   45432\n' +
    '13154   46550\n' +
    '88519   43458\n' +
    '32560   90478\n' +
    '65035   71620\n' +
    '92462   61237\n' +
    '69416   79584\n' +
    '35688   21793\n' +
    '28438   39240\n' +
    '82325   27813\n' +
    '78531   84321\n' +
    '24899   36148\n' +
    '85012   89990\n' +
    '23508   67634\n' +
    '66264   60161\n' +
    '66503   38477\n' +
    '15986   91668\n' +
    '79146   63922\n' +
    '37435   85030\n' +
    '62752   85977\n' +
    '26512   81606\n' +
    '40841   82246\n' +
    '46251   73475\n' +
    '34026   19249\n' +
    '50440   41947\n' +
    '76774   11280\n' +
    '22007   60880\n' +
    '94909   87526\n' +
    '58404   84321\n' +
    '75320   18175\n' +
    '76222   89990\n' +
    '91724   15431\n' +
    '48733   37574\n' +
    '36629   12879\n' +
    '58515   21379\n' +
    '12471   45395\n' +
    '37709   79056\n' +
    '14932   47109\n' +
    '98634   80670\n' +
    '97279   38097\n' +
    '96785   84321\n' +
    '12591   89556\n' +
    '36934   61786\n' +
    '41593   32076\n' +
    '78262   38097\n' +
    '60695   50941\n' +
    '79770   93836\n' +
    '41948   58398\n' +
    '84058   63922\n' +
    '35466   34206\n' +
    '99842   86919\n' +
    '57631   53042\n' +
    '22167   33022\n' +
    '61786   68147\n' +
    '69070   89045\n' +
    '30553   48228\n' +
    '96972   46550\n' +
    '49251   79584\n' +
    '50994   75840\n' +
    '91178   59794\n' +
    '29903   18646\n' +
    '92270   63922\n' +
    '50470   19887\n' +
    '68328   87526\n' +
    '87788   29501\n' +
    '56579   59667\n' +
    '23154   37081\n' +
    '29012   69142\n' +
    '24751   89990\n' +
    '12191   38097\n' +
    '14613   62616\n' +
    '88157   75476\n' +
    '78319   74115\n' +
    '57573   37081\n' +
    '49634   88296\n' +
    '80779   23920\n' +
    '58363   45944\n' +
    '38626   23891\n' +
    '44119   43477\n' +
    '87012   92308\n' +
    '94285   19887\n' +
    '47957   58398\n' +
    '98671   73475\n' +
    '80957   90536\n' +
    '75724   97254\n' +
    '55207   34449\n' +
    '26929   46570\n' +
    '88177   67524\n' +
    '42538   87526\n' +
    '60062   34610\n' +
    '31875   89453\n' +
    '84401   51230\n' +
    '30370   37435\n' +
    '77609   26508\n' +
    '54400   89045\n' +
    '16998   76877\n' +
    '53993   49621\n' +
    '80345   11280\n' +
    '33089   83000\n' +
    '59754   54338\n' +
    '10070   58398\n' +
    '79056   47218\n' +
    '38998   94596\n' +
    '78946   93836\n' +
    '17022   58398\n' +
    '26488   96876\n' +
    '29505   48228\n' +
    '87585   84630\n' +
    '11881   50840\n' +
    '34065   89196\n' +
    '92780   57959\n' +
    '84213   19887\n' +
    '89873   64164\n' +
    '88432   76456\n' +
    '27932   48228\n' +
    '75295   51234\n' +
    '87532   48228\n' +
    '89045   79056\n' +
    '90024   40848\n' +
    '83717   70022\n' +
    '44095   35548\n' +
    '61389   31672\n' +
    '45153   80712\n' +
    '53642   46743\n' +
    '79895   27572\n' +
    '62353   63922\n' +
    '31718   43553\n' +
    '47638   16679\n' +
    '68079   37435\n' +
    '99980   82246\n' +
    '28989   53198\n' +
    '55315   72011\n' +
    '39285   57048\n' +
    '63939   79056\n' +
    '79274   44485\n' +
    '67372   46550\n' +
    '37081   89990\n' +
    '90006   46550\n' +
    '78226   14583\n' +
    '49740   39212\n' +
    '57801   58398\n' +
    '99700   89990\n' +
    '20514   78226\n' +
    '74207   90650\n' +
    '30895   37435\n' +
    '45690   48228\n' +
    '59599   95569\n' +
    '36570   43919\n' +
    '27098   46550\n' +
    '23232   58398\n' +
    '64885   62096\n' +
    '85030   17022\n' +
    '91242   68818\n' +
    '32735   79056\n' +
    '84321   35330\n' +
    '15556   73475\n' +
    '65535   20996\n' +
    '46287   47868\n' +
    '72870   88715\n' +
    '26102   28963\n' +
    '53627   60988\n' +
    '24886   17144\n' +
    '96189   76191\n' +
    '24759   45636\n' +
    '98950   93836\n' +
    '47061   90595\n' +
    '74001   11280\n' +
    '91701   50701\n' +
    '35581   79056\n' +
    '55474   50020\n' +
    '39955   95451\n' +
    '16183   78226\n' +
    '76584   61285\n' +
    '22474   97165\n' +
    '23396   37435\n' +
    '71483   50801\n' +
    '94355   26883\n' +
    '16187   82246\n' +
    '48892   19971\n' +
    '78206   44272\n' +
    '90897   53164\n' +
    '60606   54389\n' +
    '15976   30489\n' +
    '64132   87526\n' +
    '30030   56758\n' +
    '58524   78226\n' +
    '37832   38097\n' +
    '78244   99949\n' +
    '10124   28222\n' +
    '45015   95384\n' +
    '98771   10124\n' +
    '69753   82069\n' +
    '71588   56590\n' +
    '39250   55040\n' +
    '60302   75373\n' +
    '44720   75373\n' +
    '49715   89857\n' +
    '17921   63358\n' +
    '20595   41212\n' +
    '71304   86278\n' +
    '52931   42672\n' +
    '12734   79056\n' +
    '96838   51840\n' +
    '69950   91553\n' +
    '20134   46460\n' +
    '44631   57523\n' +
    '21834   82246\n' +
    '87705   67785\n' +
    '67003   90674\n' +
    '57615   46550\n' +
    '24713   27095\n' +
    '92252   37081\n' +
    '69531   40818\n' +
    '95550   98970\n' +
    '69979   52208\n' +
    '86183   56378\n' +
    '97271   66222\n' +
    '34116   56073\n' +
    '61862   26938\n' +
    '69230   60312\n' +
    '39386   73475\n' +
    '91297   27731\n' +
    '91115   71904\n' +
    '65373   32930\n' +
    '22264   84534\n' +
    '42510   24914\n' +
    '31022   11750\n' +
    '79868   79584\n' +
    '52225   11280\n' +
    '81993   22693\n' +
    '90622   29200\n' +
    '10788   36850\n' +
    '19596   74840\n' +
    '18745   89990\n' +
    '95360   48049\n' +
    '37314   40727\n' +
    '43291   88941\n' +
    '16658   42023\n' +
    '42096   91462\n' +
    '35810   67282\n' +
    '60361   64835\n' +
    '92458   79056\n' +
    '75435   68039\n' +
    '28125   44179\n' +
    '59855   53140\n' +
    '77935   17022\n' +
    '54641   63922\n' +
    '38395   79056\n' +
    '57487   60560\n' +
    '28437   42839\n' +
    '70988   11280\n' +
    '71731   44391\n' +
    '71274   97823\n' +
    '26290   50801\n' +
    '44854   28186\n' +
    '48594   90871\n' +
    '77287   73475\n' +
    '65614   84401\n' +
    '15083   12542\n' +
    '46738   84321\n' +
    '97269   92183\n' +
    '70388   79584\n' +
    '43702   50801\n' +
    '68959   40727\n' +
    '85936   67896\n' +
    '66276   61786\n' +
    '46788   79046\n' +
    '75138   51794\n' +
    '67218   16350\n' +
    '84121   37435\n' +
    '85923   46550\n' +
    '27696   64738\n' +
    '33242   97663\n' +
    '53268   90595\n' +
    '74163   13720\n' +
    '35519   37435\n' +
    '95673   76504\n' +
    '75926   50898\n' +
    '31828   46367\n' +
    '13255   34762\n' +
    '91251   19661\n' +
    '35165   60459\n' +
    '89359   57486\n' +
    '56104   68802\n' +
    '23120   10446\n' +
    '27928   94429\n' +
    '13036   87135\n' +
    '68217   89045\n' +
    '90595   77093\n' +
    '64564   19604\n' +
    '20580   38456\n' +
    '95473   99949\n' +
    '23762   19970\n' +
    '94918   49478\n' +
    '95915   73475\n' +
    '43165   21655\n' +
    '28604   10124\n' +
    '77991   89045\n' +
    '69168   12955\n' +
    '67281   36803\n' +
    '63168   34514\n' +
    '54261   92874\n' +
    '43629   11280\n' +
    '58472   56533\n' +
    '87513   85394\n' +
    '78278   38097\n' +
    '27186   53704\n' +
    '12183   15651\n' +
    '85071   34888\n' +
    '74115   71810\n' +
    '38589   42387\n' +
    '59858   58282\n' +
    '81623   50530\n' +
    '18220   40720\n' +
    '80203   37435\n' +
    '25112   95576\n' +
    '27487   51328\n' +
    '52735   36378\n' +
    '57441   83458\n' +
    '16583   74359\n' +
    '68008   88649\n' +
    '93205   93836\n' +
    '29428   76277\n' +
    '63669   73090\n' +
    '27809   91190\n' +
    '71814   87028\n' +
    '36345   69002\n' +
    '19141   71868\n' +
    '85043   10124\n' +
    '35017   38242\n' +
    '72320   53921\n' +
    '66740   17022\n' +
    '28399   78733\n' +
    '22592   81140\n' +
    '30299   45195\n' +
    '34919   40727\n' +
    '19792   89045\n' +
    '25687   93836\n' +
    '83082   90916\n' +
    '40314   82874\n' +
    '80873   63922\n' +
    '21542   11066\n' +
    '55959   94833\n' +
    '77334   37081\n' +
    '19353   21529\n' +
    '19186   73475\n' +
    '34259   95072\n' +
    '13064   74519\n' +
    '41193   49662\n' +
    '55457   72223\n' +
    '16381   65670\n' +
    '50435   19770\n' +
    '50032   50801\n' +
    '49806   46550\n' +
    '18336   37435\n' +
    '13333   90595\n' +
    '90334   19267\n' +
    '60180   82246\n' +
    '93184   62302\n' +
    '74440   26507\n' +
    '63011   87526\n' +
    '40458   91304\n' +
    '23721   57800\n' +
    '63922   17206\n' +
    '95151   38097\n' +
    '51880   98112\n' +
    '20539   54229\n' +
    '93904   62420\n' +
    '72851   46550\n' +
    '42399   61786\n' +
    '99078   63519\n' +
    '12254   84321\n' +
    '10577   44243\n' +
    '46056   37435\n' +
    '51235   39472\n' +
    '50954   12660\n' +
    '77199   56517\n' +
    '18283   63922\n' +
    '52859   87526\n' +
    '15246   98536\n' +
    '93836   97622\n' +
    '49522   88978\n' +
    '73549   40727\n' +
    '31118   75373\n' +
    '51627   61786\n' +
    '89566   93643\n' +
    '23542   37435\n' +
    '54992   11280\n' +
    '24990   37435\n' +
    '33159   19657\n' +
    '53499   17022\n' +
    '84995   72286\n' +
    '45818   50732\n' +
    '41169   14636\n' +
    '40120   26973\n' +
    '64286   84321\n' +
    '63432   30593\n' +
    '99949   24130\n' +
    '61077   17022\n' +
    '36433   82246\n' +
    '54816   59964\n' +
    '85544   84321\n' +
    '60397   52196\n' +
    '76341   37081\n' +
    '31479   79027\n' +
    '16260   17420\n' +
    '96337   10124\n' +
    '65067   62284\n' +
    '26483   44801\n' +
    '96326   17022\n' +
    '14058   54149\n' +
    '13393   65898\n' +
    '65901   53423\n' +
    '38500   57276\n' +
    '20118   79584\n' +
    '44353   40727\n' +
    '47498   49739\n' +
    '93041   47833\n' +
    '46970   46550\n' +
    '33688   75373\n' +
    '68223   90514\n' +
    '87884   94553\n' +
    '65159   37435\n' +
    '58329   74006\n' +
    '42199   37350\n' +
    '76135   20844\n' +
    '46639   93433\n' +
    '65739   49055\n' +
    '43290   40727\n' +
    '31619   86698\n' +
    '77506   86616\n' +
    '65377   56317\n' +
    '31884   84321\n' +
    '52311   81238\n' +
    '99796   93836\n' +
    '51116   95658\n' +
    '41167   73020\n' +
    '16379   18876\n' +
    '12306   97271\n' +
    '31299   48015\n' +
    '73188   70147\n' +
    '11052   42268\n' +
    '65938   89990\n' +
    '26961   98705\n' +
    '95494   58398\n' +
    '59265   23555\n' +
    '87502   32132\n' +
    '70660   84797\n' +
    '12091   89045\n' +
    '41613   26719\n' +
    '68419   20739\n' +
    '26943   58398\n' +
    '89349   89990\n' +
    '16651   17022\n' +
    '95467   28221\n' +
    '89990   98021\n' +
    '85616   86929\n' +
    '16479   51259\n' +
    '76664   83454\n' +
    '78928   74941\n' +
    '31423   45590\n' +
    '93437   82778\n' +
    '85851   52691\n' +
    '76954   15659\n' +
    '16646   74584\n' +
    '48296   46550\n' +
    '77084   70921\n' +
    '27964   99119\n' +
    '41032   78157\n' +
    '32094   82246\n' +
    '29499   49175\n' +
    '79737   13077\n' +
    '25423   68557\n' +
    '12219   58628\n' +
    '70282   29077\n' +
    '87976   11280\n' +
    '57871   43034\n' +
    '81209   58398\n' +
    '56626   45328\n' +
    '29128   28793\n' +
    '14975   38794\n' +
    '58884   36392\n' +
    '24278   46550\n' +
    '77033   27547\n' +
    '74285   73475\n' +
    '10130   32903\n' +
    '34728   11456\n' +
    '40336   17022\n' +
    '62399   45936\n' +
    '95138   53688\n' +
    '12955   16609\n' +
    '74887   93836\n' +
    '18948   93836\n' +
    '28427   26898\n' +
    '67749   80949\n' +
    '94522   17022\n' +
    '76210   82892\n' +
    '78717   36081\n' +
    '13088   80671\n' +
    '80352   18670\n' +
    '68720   41082\n' +
    '62146   69651\n' +
    '39371   84952\n' +
    '41619   27315\n' +
    '90093   58398\n' +
    '32716   45626\n' +
    '11280   27624\n' +
    '22129   94534\n' +
    '24812   10124\n' +
    '43238   86431\n' +
    '35791   97662\n' +
    '13162   53170\n' +
    '57534   15678\n' +
    '66069   63618\n' +
    '49841   11541\n' +
    '23345   38097\n' +
    '36649   79056\n' +
    '37193   76443\n' +
    '18519   64707\n' +
    '34081   61786\n' +
    '47018   75935\n' +
    '30452   48882\n' +
    '12559   58817\n' +
    '32825   91051\n' +
    '16051   19974\n' +
    '80171   17022\n' +
    '19374   54710\n' +
    '57295   84738\n' +
    '81314   38097\n' +
    '33479   49965\n' +
    '38611   79056\n' +
    '63785   49754\n' +
    '18774   70415\n' +
    '98510   72330\n' +
    '85801   73475\n' +
    '10744   17022\n' +
    '15097   11280\n' +
    '52514   37435\n' +
    '86860   96099\n' +
    '27804   22005\n' +
    '62601   79155\n' +
    '86020   70452\n' +
    '26991   15399\n' +
    '98690   69989\n' +
    '18491   79768\n' +
    '85009   79056\n' +
    '11329   20212\n' +
    '10782   70405\n' +
    '85026   40727\n' +
    '26888   34001\n' +
    '36315   42445\n' +
    '49098   37435\n' +
    '59474   38097\n' +
    '86676   41947\n' +
    '55178   84321\n' +
    '53985   87526\n' +
    '65575   47299\n' +
    '57292   82817\n' +
    '24657   37081\n' +
    '82204   10439\n' +
    '82639   73475\n' +
    '81107   74139\n' +
    '89946   97271\n' +
    '93306   41394\n' +
    '62863   46550\n' +
    '48547   86956\n' +
    '12374   55301\n' +
    '81681   95539\n' +
    '94195   84321\n' +
    '15303   24017\n' +
    '36395   93928\n' +
    '28572   10804\n' +
    '62931   45406\n' +
    '33902   88845\n' +
    '25697   83483\n' +
    '86956   51476\n' +
    '73957   55123\n' +
    '83525   29803\n' +
    '16581   19887\n' +
    '96012   90129\n' +
    '14067   40727\n' +
    '66384   38351\n' +
    '43782   75373\n' +
    '53517   29489\n' +
    '17126   71797\n' +
    '10854   68046\n' +
    '68594   89990\n' +
    '89786   17022\n' +
    '81737   11280\n' +
    '71138   84321\n' +
    '77457   62041\n' +
    '99540   54740\n' +
    '15369   87693\n' +
    '73475   39716\n' +
    '35348   99949\n' +
    '67944   97271\n' +
    '91345   20757\n' +
    '48703   99901\n' +
    '56450   84321\n' +
    '75169   70680\n' +
    '27015   45299\n' +
    '34175   85030\n' +
    '21184   64377\n' +
    '95716   97271\n' +
    '25738   70254\n' +
    '79049   75062\n' +
    '54904   68773\n' +
    '12813   47161\n' +
    '95857   74505\n' +
    '17456   87526\n' +
    '24008   30203\n' +
    '92925   17022\n' +
    '17008   98227\n' +
    '53399   13325\n' +
    '84080   49498\n' +
    '23522   62070\n' +
    '80392   37081\n' +
    '67497   89518\n' +
    '31797   46550\n' +
    '67380   29610\n' +
    '29237   47817\n' +
    '32106   13477\n' +
    '17711   61786\n' +
    '19802   35480\n' +
    '46456   37081\n' +
    '17560   67389\n' +
    '59598   64837\n' +
    '30808   10592\n' +
    '78213   86193\n' +
    '34411   89045\n' +
    '22714   61786\n' +
    '88368   79584\n' +
    '49172   37435\n' +
    '28106   30525\n' +
    '34595   65269\n' +
    '67363   90595\n' +
    '50389   33649\n' +
    '57932   74115\n' +
    '85665   15566\n' +
    '68846   84257\n' +
    '37420   75483\n' +
    '70969   85030\n' +
    '53989   74115\n' +
    '30509   81520\n' +
    '92232   63922\n' +
    '12314   64612\n' +
    '59372   76983\n' +
    '31019   75373\n' +
    '28072   58019\n' +
    '51728   67527\n' +
    '82597   36949\n' +
    '66512   46706\n' +
    '89805   89043\n' +
    '13220   72753\n' +
    '19121   31313\n' +
    '27852   89644\n' +
    '29411   97271\n' +
    '10756   88672\n' +
    '60773   82080\n' +
    '81746   11688\n' +
    '90653   23550\n' +
    '59400   14905\n' +
    '97489   44079\n' +
    '20132   40678\n' +
    '82210   43722\n' +
    '90436   80985\n' +
    '92889   18182\n' +
    '40727   19573\n' +
    '76922   17022\n' +
    '27554   78420\n' +
    '47592   87324\n' +
    '78580   75728\n' +
    '91390   63922\n' +
    '82409   80324\n' +
    '60005   53958\n' +
    '46353   90334\n' +
    '89672   26377\n' +
    '52436   11280\n' +
    '71495   41947\n' +
    '59787   93836\n' +
    '13621   79584\n' +
    '16093   31156\n' +
    '11603   51436\n' +
    '31593   12955\n' +
    '70829   89990\n' +
    '61100   96353\n' +
    '71072   61786\n' +
    '33450   17022\n' +
    '65493   48359\n' +
    '51250   44884\n' +
    '49691   61786\n' +
    '41947   61786\n' +
    '60973   93836\n' +
    '44926   87954\n' +
    '90989   35723\n' +
    '98883   30386\n' +
    '83974   67713\n' +
    '86576   17323\n' +
    '32534   77745\n' +
    '57475   32708\n' +
    '86499   43190\n' +
    '26325   71687\n' +
    '16737   58398\n' +
    '88460   17022\n' +
    '10798   61963\n' +
    '59899   54790\n' +
    '84722   56390\n' +
    '38117   75766\n' +
    '12595   97271\n' +
    '23267   78757\n' +
    '70504   97271\n' +
    '44104   63922\n' +
    '22950   85030\n' +
    '66137   84321\n' +
    '18407   99949\n' +
    '37598   61786\n' +
    '28201   24323\n' +
    '19404   79868\n' +
    '53725   33781\n' +
    '56941   41947\n' +
    '88231   83925\n' +
    '30916   73475\n' +
    '81019   46011\n' +
    '91386   23123\n' +
    '29455   79332\n' +
    '32603   42378\n' +
    '61578   46922\n' +
    '67431   12955\n' +
    '85884   15692\n' +
    '40799   89045\n' +
    '27326   97271\n' +
    '79681   11280\n' +
    '35614   38097\n' +
    '99407   54190\n' +
    '30288   10124\n' +
    '59805   66109\n' +
    '27031   12955\n' +
    '51952   46550\n' +
    '63420   17022\n' +
    '96282   17307\n' +
    '45123   17022\n' +
    '95858   32553\n' +
    '85339   98702\n' +
    '19887   81650\n' +
    '20177   66465\n' +
    '92548   84663\n' +
    '28915   38097\n' +
    '48995   58398\n' +
    '32153   97259\n' +
    '14697   55843\n' +
    '15115   31921\n' +
    '97258   21175\n' +
    '11833   75150\n' +
    '20476   37081\n' +
    '57780   87869\n' +
    '20868   16813\n' +
    '55154   72786\n' +
    '51855   79056\n' +
    '58551   94071\n' +
    '32367   60493\n' +
    '70926   16754\n' +
    '95196   94004\n' +
    '30949   32933\n' +
    '93955   10128\n' +
    '14553   61786\n' +
    '67116   11579\n' +
    '34377   85680\n' +
    '69983   79584\n' +
    '92220   38097\n' +
    '69116   11280\n' +
    '83291   10124\n' +
    '63499   30127\n' +
    '48167   97271\n' +
    '70014   13990\n' +
    '40226   78226\n' +
    '71699   12411\n' +
    '40455   75750\n' +
    '74381   11343\n' +
    '88846   74967\n' +
    '17219   79739\n' +
    '78747   30775\n' +
    '98201   18354\n' +
    '54571   68841\n' +
    '85738   49837\n' +
    '17375   10897\n' +
    '44862   46550\n' +
    '15932   11030\n' +
    '79584   17022\n' +
    '77641   58398\n' +
    '54882   38097\n' +
    '87246   75159\n' +
    '33635   41878\n' +
    '75249   60331\n' +
    '46712   55151\n' +
    '48228   91967\n' +
    '17264   39458\n' +
    '58907   86956\n' +
    '62693   87904\n' +
    '72122   43222\n' +
    '70553   73934\n' +
    '43027   90334\n' +
    '69420   97905\n' +
    '91527   10124\n' +
    '34146   96995\n' +
    '77998   88728\n' +
    '80279   91008\n' +
    '35125   77608\n' +
    '33786   63922\n' +
    '82027   38917\n' +
    '10855   49903\n' +
    '66407   38097\n' +
    '50926   49360\n' +
    '73591   97271\n' +
    '97759   84321\n' +
    '82742   49137\n' +
    '16002   57753\n' +
    '53455   38875\n' +
    '66703   40727\n' +
    '76244   92842\n' +
    '87526   49664\n' +
    '92147   87526'
module.exports = {initialData}