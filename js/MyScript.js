class MyScript {

  constructor() {
    this.globalscript = ""; this.globalvariables = "";
  }

  addGlobal(variable, value) {
    this.allvariables = "";
    this.allvariables += variable+ ' = "'+value+'";\n'
    this.globalvariables += this.allvariables;
  }

  fbLoad(path, toggle, array) {
    this.allvariables = ""; this.allscript = ""; this.all = "";

    for (var i = 0; i < array[0].length; i++) {
      this.all += '\t\tdocument.getElementById("'+array[1][i]+'").'+array[2][i]+' = path1.'+array[0][i]+';\n';
    }
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
    '\tref.once("value").then(function(snapshot) {\n'+
    '\t\tvar path1 = (snapshot.val().'+path+');\n'+
    '\t\tvar pathcontent = (Object.keys(path1));\n'+
    this.all+
    '\t});\n'+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbRemove(target,toggle,array) {
    this.allvariables = ""; this.allscript = ""; this.all = "";
    for (var i = 0; i < array[0].length; i++) {
      this.all += '\tdatabase.ref("'+target+'/'+array[0][i]+'").remove();\n';
    }
    this.allvariables += '';
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
      this.all+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbSave(target,toggle,array) {
    this.allvariables = ""; this.allscript = ""; this.all = "";
    for (var i = 0; i < array[0].length; i++) {
    this.all += '\t\t'+array[0][i]+': '+array[1][i]+',\n';
    }
    this.globalvariables += this.allvariables;
    this.allvariables += '';
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
      '\tdatabase.ref("'+target+'").set({\n'+
      this.all+
    '\t});\n'+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  draggable(input) {
    this.allvariables = ""; this.allscript = "";
      this.allscript += 'function allowDrop(ev) {\r'+
    '\tev.preventDefault();\r'+
    '}\r\r'+
    'function drag(ev) {\r'+
    '\tev.dataTransfer.setData("Text", ev.target.'+input+');\r'+
    '}\r\r'+
    'function drop(ev) {\r'+
    '\tvar data = ev.dataTransfer.getData("Text");\r'+
    '\tev.target.appendChild(document.getElementById(data));\r'+
    '\tev.preventDefault();\r'+
    '}\r\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbInit() {
    this.allvariables = ""; this.allscript = "";
      this.allvariables = "// Your web app's Firebase configuration\n"+
      'var firebaseConfig = {\n'+
      '\tapiKey: "AIzaSyArrRzKTRgXkLeVb1PIf09tNesAfB7PCL8",\n'+
      '\tauthDomain: "draggable-9f92b.firebaseapp.com",\n'+
      '\tdatabaseURL: "https://draggable-9f92b.firebaseio.com",\n'+
      '\tprojectId: "draggable-9f92b",\n'+
      '\tstorageBucket: "draggable-9f92b.appspot.com",\n'+
      '\tmessagingSenderId: "1010593277055",\n'+
      '\tappId: "1:1010593277055:web:1b729dc7368b8f6f"\n'+
      '};\n\r'+
      '// Initialize Firebase\n'+
      'firebase.initializeApp(firebaseConfig);\n'+
      '// database declaration\n'+
      'database = firebase.database();\n'+
      'const auth = firebase.auth();\n\r'+
      'const ref = database.ref();\n\r';
      this.globalvariables += this.allvariables;
      this.globalscript += this.allscript;
      return '';
    }

  fbAuthStateChangedClose() {
    this.allvariables = ""; this.allscript = "";
    this.allscript += '\t}\n'+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbAuthStateChangedElse() {
    this.allvariables = ""; this.allscript = "";
    this.allscript += '\t} else {\n'+
    '\t\tconsole.log("not logged in");\n';
    this.globalscript += this.allscript;
    return '';
  }

  fbAuthStateChangedOpen() {
    this.allvariables = ""; this.allscript = "";
    this.allscript += 'firebase.auth().onAuthStateChanged(firebaseUser => {\n'+
    '\tif (firebaseUser) {\n'+
    '\t\tconsole.log(firebaseUser);\n';
    this.globalscript += this.allscript;
    return '';
  }

  fbLogout(toggle) {
    this.allvariables = ""; this.allscript = "";
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
      '\tfirebase.auth().signOut();\n'+
      '});\n\r';
      this.globalscript += this.allscript;
      return '';
  }

  fbLogin(source1,source2,toggle) {
    this.allvariables = ""; this.allscript = "";
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
                      '\tconst email = '+source1+'.value;\n'+
                      '\tconst pass = '+source2+'.value;\n'+
                      '\tconst promise = auth.signInWithEmailAndPassword(email,pass);\n'+
                      '\tpromise.catch(e => console.log("err"));\n'+
                      '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbSignIn(source1,source2,toggle) {
    this.allvariables = ""; this.allscript = "";
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
                      '\tconst email = '+source1+'.value;\n'+
                      '\tconst pass = '+source2+'.value;\n'+
                      '\tconst promise = auth.createUserWithEmailAndPassword(email,pass);\n'+
                      '\tpromise.catch(e => console.log("err"));\n'+
                      '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  get(source,input,output,target,toggle) {
    this.allvariables = ""; this.allscript = "";
    switch (output) {
        // '','','location','index.html','homeButton'
        case 'toarray':
          this.allvariables += 'var '+target+' = [];\n';
          this.globalvariables += this.allvariables;
          this.allscript += toggle + '.addEventListener("click", e => {\n'+
                            '\t'+target+' = '+source+'.'+input+';\n'+
                            '\talert('+target+');\n'+
                            '});\n\r';
        break;

        // '','','location','prova.html','provaButton'
        case 'location':
          this.allvariables += '';
          this.globalvariables += this.allvariables;
          if (source != 'auto') {
            this.allscript += toggle + '.addEventListener("click", e => {\n'+
            '\twindow.location = "'+target+'";\n'+
            '});\n\r';
          } else {
            this.allscript += '\twindow.location = "'+target+'";\n';
          }
        break;

        // 'inputTitle','value','innerHTML','title','submitButton'
        case 'innerHTML':
        this.allvariables += 'var '+toggle+' = document.getElementById("'+toggle+'");\n'+
                             'var '+target+' = document.getElementById("'+target+'");\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += toggle + '.addEventListener("click", e => {\n'+
                          '\tdocument.getElementById("'+target+'").'+output+' = '+source+'.'+input+';\n'+
                          '});\n\r';
        break;

        // 'inputTitle','value','alert','','alertButton'
        case 'alert':
        this.allvariables += 'var '+toggle+' = document.getElementById("'+toggle+'");\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += this.eListOpen(toggle)+
                          '\talert('+source+'.'+input+');\n'+
                          this.eListClose();
        break;

        // 'inputTitle','value','alert','','alertButton'
        case 'log':
        this.allvariables += 'var '+toggle+' = document.getElementById("'+toggle+'");\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += this.eListOpen(toggle)+
                          '\tconsole.log('+source+');\n'+
                          this.eListClose();
        break;

        // 'inputTitle','value','alert','variablename',''
        case 'variable':
        //get(source,input,output,target,toggle)
        this.allvariables += 'var '+target+' = document.getElementById("'+source+'").'+input+';\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += "";
        break;
      default:
    }
    this.globalscript += this.allscript;
    return '';
  }

  list(toggle, array) {
    this.allvariables = ""; this.allscript = "";
    for (var i = 0; i < array.length; i++) {
      this.get('provaInput','innerHTML','innerHTML','altraProvaInput','myButton');
    }
    this.globalscript += this.allscript;
    return '';
  }

  eListOpen(toggle) {
    return toggle + '.addEventListener("click", e => {\n';
  }

  eListClose() {
    return '});\n\r';
  }

  variables() {
    return this.globalvariables + '\n\r';
  }

  script() {
    return this.globalscript + '\n';
  }
}

myscript = new MyScript();
