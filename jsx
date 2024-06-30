import React, { useState, useEffect } from 'eact';
import { PrismLight as SyntaxHighlighter } from 'prism-react-renderer';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');

  useEffect(() => {
    const textarea = document.getElementById('code-textarea');
    textarea.style.height = '0px';
    textarea.style.height = textarea.scrollHeight + 'px';
  }, [code]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="code-editor">
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
      <textarea
        id="code-textarea"
        value={code}
        onChange={handleCodeChange}
        spellCheck={false}
      />
      <SyntaxHighlighter language={language} Prism={Prism}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
