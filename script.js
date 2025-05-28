function caesarEncrypt(text, key) {
  let result = '';
  key = parseInt(key);
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + key) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}

function caesarDecrypt(text, key) {
  return caesarEncrypt(text, (26 - parseInt(key)) % 26);
}

function encrypt() {
  let plainText = document.getElementById('plainText').value;
  const key = document.getElementById('encryptKey').value;
  if (!plainText || !key) {
    alert("Please enter both plain text and key.");
    return;
  }
  plainText = plainText.replace(/\s/g, ''); // remove spaces
  document.getElementById('cipherOutput').value = caesarEncrypt(plainText, key);
}

function decrypt() {
  let cipherText = document.getElementById('cipherInput').value;
  const key = document.getElementById('decryptKey').value;
  if (!cipherText || !key) {
    alert("Please enter both cipher text and key.");
    return;
  }
  cipherText = cipherText.replace(/\s/g, ''); // remove spaces
  try {
    document.getElementById('plainOutput').value = caesarDecrypt(cipherText, key);
  } catch {
    alert("Decryption failed.");
    document.getElementById('plainOutput').value = "";
  }
}