import React, { useState } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Popover } from 'antd';
import { Link } from 'react-router-dom';
import { message } from 'antd';

const ExpertSystem = () => {
  const [gejala, setGejala] = useState({
    G01: '',
    G02: '',
    G03: '',
    G04: '',
    G05: '',
    G06: '',
    G07: '',
    G08: '',
    G09: '',
    G10: '',
    G11: '',
    G12: '',
    G13: '',
    G14: '',
    G15: '',
    G16: '',
  });
  const [hasilDiagnosis, setHasilDiagnosis] = useState('');
  const [hasilDiagnosisDesc, setHasilDiagnosisDesc] = useState('');
  const [suggestedIngredients, setHasilSuggestedIngredients] = useState('');
  const [suggestedIngredientsDesc, setHasilSuggestedIngredientsDesc] = useState('');
  const [suggestedIngredientPemakaian, setHasilsuggestedIngredientsPemakaian] = useState('');
  const [user, setUser] = useState({});
  const [diagnosaSelesai, setDiagnosaSelesai] = useState(false);
  const [skinType, setSkinType] = useState('');


  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }

    return () => {
      // Reset gejala values and skin type when component is unmounted
      setGejala({
        G01: '',
        G02: '',
        G03: '',
        G04: '',
        G05: '',
        G06: '',
        G07: '',
        G08: '',
        G09: '',
        G10: '',
        G11: '',
        G12: '',
        G13: '',
        G14: '',
        G15: '',
        G16: '',
      });
      setSkinType('');
    };
  }, []);

  const sendEmail = () => {
    if (user && user.email) {
      const serviceId = 'service_yx27eem'; 
      const templateId = 'template_zoq2u94'; 
      const userId = 'SFBijCKOQC0zd_PaQ'; 

      const templateParams = {
        to_email: user.email,
        subject: 'Test Result',
        body1: `
          ${hasilDiagnosis}
        `,
        body2: `
          ${hasilDiagnosisDesc}
        `,
        body3: `
          ${suggestedIngredients}
        `,
        body4: `
          ${suggestedIngredientsDesc}
        `,
        body5: `
          ${suggestedIngredientPemakaian}
        `
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
      message.info('Please wait. Your request is being processed.')
        .then((response) => {
          message.success('Email sent!')
          console.log('Email sent successfully:', response.text);
          // Additional logic after the email is sent
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          message.error('Error sending email. Try again in a few minutes. If error still occurs please contact us.')
          // Additional error handling logic
        });
    }
  };

  const handleEmailButtonClick = () => {
    // Set the diagnosaSelesai flag to true
    setDiagnosaSelesai(true);

    // Call the sendEmail function
    sendEmail();
  };

  const handleGejalaChange = (gejalaKey, value) => {
    setGejala((prevGejala) => ({
      ...prevGejala,
      [gejalaKey]: value,
    }));
  };

  const handleSkinType = (type) => {
    setSkinType(type);
  };

  const forwardChaining = () => {
    let suggestedIngredients = '';
    let suggestedIngredientsDesc = ''; 
    let suggestedIngredientPemakaian = '';

    // Set the diagnosis result first
    let hasilDiagnosis = '';
    let hasilDiagnosisDesc = ''; 
    if (gejala.G01 === 'yes' && gejala.G06 === 'yes') {
      hasilDiagnosis = 'Komedo Hitam (Blackhead)';
      hasilDiagnosisDesc = 'Komedo hitam adalah Jenis jerawat yang ditandai oleh benjolan hitam kecil pada kulit, disebabkan oleh penyumbatan folikel rambut oleh minyak berlebih, sel kulit mati, dan bakteri.'
    } else if (gejala.G01 === 'yes' && gejala.G05 === 'yes') {
      hasilDiagnosis = 'Komedo Putih (Whitehead)';
      hasilDiagnosisDesc = 'Komedo putih adalah jenis jerawat yang mirip dengan komedo hitam, tetapi memiliki tampilan putih atau kuning kecoklatan. Komedo putih terjadi ketika folikel rambut tersumbat oleh minyak dan sel kulit mati, membentuk benjolan tertutup berwarna putih pada kulit.'
    } else if (gejala.G02 === 'yes' && gejala.G07 === 'yes' && gejala.G08 === 'yes') {
      hasilDiagnosis = 'Papula';
      hasilDiagnosisDesc = 'Papula adalah benjolan kecil yang timbul pada kulit dan biasanya berwarna merah. Mereka terjadi ketika folikel rambut menjadi meradang akibat minyak berlebih, bakteri, atau sel kulit mati.'
    } else if (gejala.G02 === 'yes' && gejala.G05 === 'yes' && gejala.G04 === 'yes') {
      hasilDiagnosis = 'Pustula';
      hasilDiagnosisDesc = 'Pustula adalah lesi bernanah yang meradang pada kulit. Pustula biasanya lebih besar dari papula dan dapat berwarna merah atau kuning. Pustula disebabkan oleh kombinasi bakteri, minyak, dan sel kulit mati.'
    } else if (gejala.G03 === 'yes' && gejala.G09 === 'yes') {
      hasilDiagnosis = 'Nodul';
      hasilDiagnosisDesc = ' Nodul adalah benjolan besar, padat, dan nyeri di bawah kulit. Nodul berkembang di dalam kulit dan sering disebabkan oleh infeksi parah pada folikel rambut.'
    } else if (gejala.G03 === 'yes' && gejala.G10 === 'yes' && gejala.G04 === 'yes' && gejala.G11 === 'yes') {
      hasilDiagnosis = 'Jerawat Batu';
      hasilDiagnosisDesc = 'Jerawat batu adalah bentuk jerawat yang parah, ditandai oleh benjolan dalam, nyeri, dan meradang. Jerawat batu terjadi ketika bakteri, minyak, dan sel kulit mati menyumbat folikel rambut secara dalam, menyebabkan infeksi dan peradangan.'
    } else if (gejala.G12 === 'yes') {
      hasilDiagnosis = 'Jerawat Pasir';
      hasilDiagnosisDesc = 'Jerawat pasir mengacu pada jerawat non-inflamasi yang terutama terdiri dari komedo hitam dan komedo putih. Jerawat ini disebabkan oleh penyumbatan folikel rambut oleh minyak dan sel kulit mati.'
    } else if (gejala.G13 === 'yes') {
      hasilDiagnosis = 'Bekas Jerawat Hiperpigmentasi';
      hasilDiagnosisDesc = 'Bekas jerawat atau hiperpigmentasi adalah bekas atau perubahan warna yang tersisa setelah jerawat sembuh. Ini terjadi karena peradangan dan kerusakan yang disebabkan oleh lesi jerawat.'
    } else if (gejala.G14 === 'yes' && gejala.G15 === 'yes') {
      hasilDiagnosis = 'Kulit Kusam';
      hasilDiagnosisDesc = 'Kulit kusam merujuk pada kulit yang kurang bercahaya dan terlihat tidak bermaya atau lelah. Ini dapat disebabkan oleh berbagai faktor seperti penumpukan sel kulit mati, dehidrasi, kurangnya eksfoliasi, atau peredaran darah yang buruk.'
    } else if (gejala.G16 === 'yes') {
      hasilDiagnosis = 'Garis Halus';
      hasilDiagnosisDesc = 'Kulit kusam merujuk pada kulit yang kurang bercahaya dan terlihat tidak bermaya atau lelah. Ini dapat disebabkan oleh berbagai faktor seperti penumpukan sel kulit mati, dehidrasi, kurangnya eksfoliasi, atau peredaran darah yang buruk.'
    } else {
      hasilDiagnosis = 'Belum ada masalah kulit yang ditemukan dari hasil test yang telah dilakukan. Hubungi dermatologis bila anda ingin melakukan pengecekan lebih lanjut.';
    }

    if (skinType === 'normal') {
      suggestedIngredients = 'Retinol';
      suggestedIngredientsDesc = ' Retinol adalah bentuk vitamin A yang sering digunakan dalam perawatan kulit. Ini dikenal sebagai salah satu bahan anti-penuaan yang efektif karena memiliki kemampuan untuk merangsang produksi kolagen, meningkatkan regenerasi sel kulit, dan mengurangi penampilan garis halus dan kerutan. Retinol juga membantu mengurangi hiperpigmentasi, menyamarkan noda hitam atau bintik-bintik gelap pada kulit, serta membantu menyempurnakan tekstur kulit secara keseluruhan.'; 
      suggestedIngredientPemakaian = 'Retinol digunakan pada malam hari. Dapat Digunakan 2-3x dalam seminggu.'
    } else if (skinType === 'kering') {
      suggestedIngredients = 'Hyaluronic Acid';
      suggestedIngredientsDesc = 'Hyaluronic Acid berperan penting dalam menjaga kelembaban kulit karena memiliki kemampuan untuk menarik dan mempertahankan air dalam jumlah besar. Hyaluronic acid sering digunakan dalam produk perawatan kulit karena mampu memberikan hidrasi yang intens, meningkatkan kelembaban kulit, dan menjaga elastisitasnya. Ini juga membantu mengurangi tampilan garis halus dan kerutan dengan memberikan efek pengisi pada kulit.'
      suggestedIngredientPemakaian = 'Hyaluronic Acid digunakan pada pagi hari dan malam hari. Dapat digunakan setiap hari.'
    } else if (skinType === 'berminyak') {
      suggestedIngredients = 'Retinol + Salicylic Acid';
      suggestedIngredientsDesc = 'Retinol adalah bentuk vitamin A yang sering digunakan dalam perawatan kulit. Ini dikenal sebagai salah satu bahan anti-penuaan yang efektif karena memiliki kemampuan untuk merangsang produksi kolagen, meningkatkan regenerasi sel kulit, dan mengurangi penampilan garis halus dan kerutan. Retinol juga membantu mengurangi hiperpigmentasi, menyamarkan noda hitam atau bintik-bintik gelap pada kulit, serta membantu menyempurnakan tekstur kulit secara keseluruhan. Sedangkan, Asam salisilat, atau salicylic acid, adalah bahan yang umum digunakan dalam produk perawatan kulit untuk mengatasi jerawat dan masalah kulit terkait. Ini bekerja sebagai exfoliant yang membantu menghilangkan sel kulit mati yang menyumbat pori-pori, mengurangi produksi minyak berlebih, dan mengurangi peradangan pada kulit. Salicylic acid juga memiliki sifat antibakteri, sehingga membantu melawan bakteri penyebab jerawat.'
      suggestedIngredientPemakaian = 'Retinol digunakan pada malam hari. Salicylic acid dapat digunakan pada malam hari jika tidak memakai retinol dan pagi hari. Retinol digunakan 2-3x dalam seminggu, Salicylic acid setiap hari.'
    } else if (skinType === 'kombinasi') {
      suggestedIngredients = 'Retinol + Salicylic Acid + Niacinamide';
      suggestedIngredientsDesc = 'Retinol adalah bentuk vitamin A yang sering digunakan dalam perawatan kulit. Ini dikenal sebagai salah satu bahan anti-penuaan yang efektif karena memiliki kemampuan untuk merangsang produksi kolagen, meningkatkan regenerasi sel kulit, dan mengurangi penampilan garis halus dan kerutan. Retinol juga membantu mengurangi hiperpigmentasi, menyamarkan noda hitam atau bintik-bintik gelap pada kulit, serta membantu menyempurnakan tekstur kulit secara keseluruhan. Sedangkan, Asam salisilat, atau salicylic acid, adalah bahan yang umum digunakan dalam produk perawatan kulit untuk mengatasi jerawat dan masalah kulit terkait. Ini bekerja sebagai exfoliant yang membantu menghilangkan sel kulit mati yang menyumbat pori-pori, mengurangi produksi minyak berlebih, dan mengurangi peradangan pada kulit. Salicylic acid juga memiliki sifat antibakteri, sehingga membantu melawan bakteri penyebab jerawat. Untuk,  Niacinamide, juga dikenal sebagai vitamin B3, adalah bahan yang sering digunakan dalam produk perawatan kulit karena berbagai manfaatnya. Ini membantu mengurangi produksi minyak berlebih, mengencangkan pori-pori, serta meningkatkan kelembutan dan kehalusan kulit. Niacinamide juga membantu mengurangi peradangan pada kulit, mengurangi kemerahan, dan meningkatkan tampilan kulit yang tidak merata. Selain itu, niacinamide memiliki efek pencerah kulit yang membantu mengurangi hiperpigmentasi dan memberikan kulit yang lebih cerah dan bersinar. '
      suggestedIngredientPemakaian = 'Retinol digunakan pada malam hari. Salicylic acid dapat digunakan pada malam hari jika tidak memakai retinol dan untuk pagi hari pemakaian salicylic acid dapat dicampur dengan niacinamide. Retinol digunakan 2-3x dalam seminggu, salicylic acid dan niacinamide setiap hari.'
    } else if (skinType === 'sensitive') {
      suggestedIngredients = 'Hyaluronic Acid + Collagen';
      suggestedIngredientsDesc = 'Hyaluronic Acid berperan penting dalam menjaga kelembaban kulit karena memiliki kemampuan untuk menarik dan mempertahankan air dalam jumlah besar. Hyaluronic acid sering digunakan dalam produk perawatan kulit karena mampu memberikan hidrasi yang intens, meningkatkan kelembaban kulit, dan menjaga elastisitasnya. Ini juga membantu mengurangi tampilan garis halus dan kerutan dengan memberikan efek pengisi pada kulit. Sedangkan, Kolagen adalah protein utama yang terdapat dalam kulit, rambut, kuku, dan jaringan ikat tubuh lainnya. Ini memberikan struktur dan kekuatan pada kulit, serta membantu menjaga kelembutan dan kelenturan kulit. Kolagen juga berperan dalam proses regenerasi sel kulit dan penyembuhan luka. Namun, produksi kolagen dalam tubuh cenderung berkurang seiring bertambahnya usia, sehingga suplemen kolagen dan produk perawatan kulit yang mengandung kolagen sering digunakan untuk membantu menjaga elastisitas dan kekencangan kulit, serta mengurangi tampilan garis halus dan kerutan.'
      suggestedIngredientPemakaian = 'Hyaluronic Acid dan Collagen digunakan pada pagi hari dan malam hari. Dapat digunakan setiap hari.'
    }
  

    const hasilDiagnosisWithIngredients = `${hasilDiagnosis}`;
    const hasilDiagnosisDescription = `${hasilDiagnosisDesc}`;
    const hasilSuggestedIngredients = `${suggestedIngredients}`;
    const hasilSuggestedIngredientsDesc = `${suggestedIngredientsDesc}`;
    const hasilSuggestedIngredientsPemakaian = `${suggestedIngredientPemakaian}`;
  
    setHasilDiagnosis(hasilDiagnosisWithIngredients);
    setHasilDiagnosisDesc(hasilDiagnosisDescription);
    setHasilSuggestedIngredients(hasilSuggestedIngredients);
    setHasilSuggestedIngredientsDesc(hasilSuggestedIngredientsDesc);
    setHasilsuggestedIngredientsPemakaian(hasilSuggestedIngredientsPemakaian);
    setDiagnosaSelesai(true);
  };
  

  const renderQuestion = () => {
    const isGejalaComplete =
    gejala.G01 !== '' &&
    gejala.G06 !== '' &&
    gejala.G05 !== '' &&
    gejala.G02 !== '' &&
    gejala.G07 !== '' &&
    gejala.G08 !== '' &&
    // Add other necessary gejala keys here
    gejala.G03 !== '' &&
    gejala.G04 !== '' &&
    gejala.G09 !== '' &&
    gejala.G10 !== '' &&
    gejala.G11 !== '' &&
    gejala.G12 !== '' &&
    gejala.G13 !== '' &&
    gejala.G14 !== '' &&
    gejala.G15 !== '' &&
      gejala.G16 !== '';
    
    
    if (gejala.G01 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda berbentuk benjolan kecil?</p>
          <button onClick={() => handleGejalaChange('G01', 'yes')}>Ya</button>
            <button onClick={() => handleGejalaChange('G01', 'no')}>Tidak</button>
            </div>
        </div>
      );
    }

    if (gejala.G01 === 'yes' && gejala.G05 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda memiliki ujung berwarna putih?</p>
          <button onClick={() => handleGejalaChange('G05', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G05', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G01 === 'yes' && gejala.G05 === 'no' && gejala.G06 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda memiliki ujung berwarna hitam?</p>
          <button onClick={() => handleGejalaChange('G06', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G06', 'no')}>Tidak</button>
          </div>
        </div>
      );
    }


    if (gejala.G01=== 'no' && gejala.G02 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda berbentuk benjolan sedang?</p>
          <button onClick={() => handleGejalaChange('G02', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G02', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G01=== 'no' && gejala.G02 === 'yes' && gejala.G07 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda terasa nyeri jika disentuh?</p>
          <button onClick={() => handleGejalaChange('G07', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G07', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G02 === 'yes' && gejala.G07 === 'yes' && gejala.G08 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda menyebabkan kemerahan?</p>
          <button onClick={() => handleGejalaChange('G08', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G08', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G02 === 'yes' && gejala.G07 === 'no' && gejala.G05 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda memiliki ujung berwarna putih?</p>
          <button onClick={() => handleGejalaChange('G05', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G05', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G02 === 'yes' && gejala.G05 === 'yes' && gejala.G04 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda dipenuhi nanah?</p>
          <button onClick={() => handleGejalaChange('G04', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G04', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G02 === 'no' && gejala.G03 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda berbentuk benjolan besar?</p>
          <button onClick={() => handleGejalaChange('G03', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G03', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }
    
    if (gejala.G03 === 'yes' && gejala.G09 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda terdapat rasa nyeri yang cukup menganggu?</p>
          <button onClick={() => handleGejalaChange('G09', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G09', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G03 === 'yes' && gejala.G09 === 'no' && gejala.G10 === '' ) {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda berwarna merah?</p>
          <button onClick={() => handleGejalaChange('G10', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G10', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G03 === 'yes' && gejala.G09 === 'no' && gejala.G10 === 'yes' && gejala.G04 === '' ) {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda dipenuhi nanah?</p>
          <button onClick={() => handleGejalaChange('G04', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G04', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G03 === 'yes' && gejala.G09 === 'no' && gejala.G10 === 'yes' && gejala.G04 === 'yes' && gejala.G11 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda terkesan terpendam?</p>
          <button onClick={() => handleGejalaChange('G11', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G11', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G03 === 'no' && gejala.G12 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah masalah kulit wajah anda berbentuk bintik kecil?</p>
          <button onClick={() => handleGejalaChange('G12', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G12', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G12 === 'no' && gejala.G13 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah area kulit hitam setelah jerawat hilang?</p>
          <button onClick={() => handleGejalaChange('G13', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G13', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G13 === 'no' && gejala.G14 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah kulit terlihat hitam/kusam?</p>
          <button onClick={() => handleGejalaChange('G14', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G14', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G13 === 'no' && gejala.G14 === 'yes' && gejala.G15 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah kulit terlihat tidak cerah?</p>
          <button onClick={() => handleGejalaChange('G15', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G15', 'no')}>Tidak</button>
          </div>
          </div>
      );
    }

    if (gejala.G14 === 'no' && gejala.G16 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
          <h3>Pertanyaan:</h3>
          <p>Apakah terdapat garis halus di area wajah yang sering bergerak?</p>
          <button onClick={() => handleGejalaChange('G16', 'yes')}>Ya</button>
          <button onClick={() => handleGejalaChange('G16', 'no')}>Tidak</button>
        </div>
        </div>
      );
    }

    if (skinType === '') {
        return (
          <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside2'>
              <h2>Apa tipe kulit wajah anda?</h2>
              <h5>Arahkan mouse pada button untuk melihat penjelasan singkat untuk tiap kulit.</h5>
              <Popover content="Tipe kulit normal merupakan tipe kulit yang tidak terlalu kering, tidak terlalu berminyak, dan terhidrasi dengan baik"
              overlayStyle={{ width: '300px' }}>
            <Button onClick={() => handleSkinType('normal')}>Normal</Button>
              </Popover>
              <Popover content="Kulit kering adalah kulit yang memiliki ciri-ciri permukaan kulit wajah kasar dan kulit wajah seperti ditarik."
              overlayStyle={{ width: '300px' }}>
                <Button onClick={() => handleSkinType('kering')}>Kering</Button>
                </Popover>
              <Popover content="Kulit berminyak biasanya ditandai dengan kulit terasa lembap dan berminyak."
              overlayStyle={{ width: '300px' }}>
                <Button onClick={() => handleSkinType('berminyak')}>Berminyak</Button>
                </Popover>
              <Popover content="Kulit kombinasi biasanya disertai dengan kombinasi kulit kering dan berminyak. Contoh : Area yang memiliki lebih banyak minyak biasanya adalah T-zone (dahi, hidung, dan dagu), sedangkan kulit di pipi biasanya normal atau kering"
              overlayStyle={{ width: '300px' }}>
                <Button onClick={() => handleSkinType('kombinasi')}>Kombinasi</Button>
                
                </Popover>
              <Popover content="Kulit sensitif adalah tipe kulit yang lebih rentan bereaksi terhadap kandungan-kandungan tertentu. Tipe kulit ini biasanya disertai dengan rasa tidak nyaman, seperti panas, kulit seperti ditarik, kemerahan atau gatal."
              overlayStyle={{ width: '300px' }}>
                <Button onClick={() => handleSkinType('sensitive')}>Sensitif</Button>
                </Popover>
          </div>
          </div>
        );
    }

    return isGejalaComplete ? null : (
      <div className='pertanyaancontainer'>
        <div className='pertanyaancontainer-inside'>
          <h3>Diagnosa</h3>
          <p>Silahkan tekan button dibawah ini untuk memulai mendiagnosa</p>
      <button className='btn-diagnosa' onClick={forwardChaining}>
        Diagnosa
        </button>
        </div>
        </div>
 );
  };

  
  
  return (
    <div className='expertsystem'>
      <h2>Best Active Skincare Ingredients for Your Skin Problems</h2>
      {!diagnosaSelesai && renderQuestion()}
      {diagnosaSelesai && (
        <div className='outside-diagnosacontainer'>
          {hasilDiagnosis === 'Belum ada masalah kulit yang ditemukan dari hasil test yang telah dilakukan. Hubungi dermatologis bila anda ingin melakukan pengecekan lebih lanjut.' ? (
            <div className='diagnosacontainer'>
              <h2>MAAF</h2>
              <p>{hasilDiagnosis}</p>
              <p>Terimakasih banyak atas waktu yang telah anda luangkan untuk mencoba website SkinTime.</p>
              <Link to="/">
                <button className="btnheader-kembali">Kembali ke Halaman Utama</button>
              </Link>
            </div>
          ) : (
            <div className='diagnosacontainer2'>
              <h4>Masalah kulit yang anda alami</h4>
              <p>{hasilDiagnosis}</p>
              <h4>Apa itu {hasilDiagnosis}?</h4>
              <p>{hasilDiagnosisDesc}</p>
              <h4>Kandungan yang cocok untuk masalah kulit anda</h4>
              <p>{suggestedIngredients}</p>
                <p>{suggestedIngredientsDesc}</p>
                <h4>Pemakaian kandungan yang tepat berdasarkan saran dari pakar</h4>
                <p>{suggestedIngredientPemakaian}</p>
                <button onClick={handleEmailButtonClick} className='cobaemail'>
            Kirim hasil ke Email
          </button>
                <Link to="/">
                <button className="btnheader-kembali">Kembali ke Halaman Utama</button>
                </Link>
                
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpertSystem;