import React, { useState } from 'react';
import { useEffect } from 'react';
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

  const [tipeKulit, setTipeKulit] = useState('');
  const [hasilDiagnosis, setHasilDiagnosis] = useState('');
  const [diagnosaSelesai, setDiagnosaSelesai] = useState(false);

  useEffect(() => {
    return () => {

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
    };
  }, []);

  const handleGejalaChange = (gejalaKey, value) => {
    setGejala((prevGejala) => ({
      ...prevGejala,
      [gejalaKey]: value,
    }));
  };

  const forwardChaining = () => {
    // Implement production rules based on the given knowledge
    if (gejala.G01 === 'yes' && gejala.G06 === 'yes') {
      setHasilDiagnosis('Komedo Hitam (Blackhead)');
      if (tipeKulit === 'Normal') {
        setTipeKulit('Retinol');
      } else if (tipeKulit === 'Kering') {
        setTipeKulit('Hyaluronic Acid');
      }
    } else if (gejala.G01 === 'yes' && gejala.G05 === 'yes') {
      setHasilDiagnosis('Komedo Putih (Whitehead)');
    } else if (gejala.G02 === 'yes' && gejala.G07 === 'yes' && gejala.G08 === 'yes') {
      setHasilDiagnosis('Papula');
    } else if (gejala.G02 === 'yes' && gejala.G05 === 'yes' && gejala.G04 === 'yes') {
      setHasilDiagnosis('Pustula');
    } else if (gejala.G03 === 'yes' && gejala.G09 === 'yes') {
      setHasilDiagnosis('Nodul');
    } else if (gejala.G03 === 'yes' && gejala.G10 === 'yes' && gejala.G04 === 'yes' && gejala.G11 === 'yes') {
      setHasilDiagnosis('Jerawat Batu');
    } else if (gejala.G12 === 'yes') {
      setHasilDiagnosis('Jerawat Pasir');
    } else if (gejala.G13 === 'yes') {
      setHasilDiagnosis('Bekas Jerawat Hiperpigmentasi');
    } else if (gejala.G14 === 'yes' && gejala.G15 === 'yes') {
      setHasilDiagnosis('Kulit Kusam');
    } else if (gejala.G16 === 'yes') {
      setHasilDiagnosis('Garis Halus');
    } else {
      setHasilDiagnosis('Mohon maaf. Gejala anda di luar cakupan kami.');
    }

    setDiagnosaSelesai(true);
  };

  // const renderQuestionTipeKulit = () => {
  //   return (
  //     <div>
  //       <h3>Pertanyaan:</h3>
  //       <p>Apa jenis kulit Anda?</p>
  //       <button onClick={() => handleGejalaChange('TipeKulit', 'Normal')}>Normal</button>
  //       <button onClick={() => handleGejalaChange('TipeKulit', 'Kering')}>Kering</button>
  //       <button onClick={() => handleGejalaChange('TipeKulit', 'Berminyak')}>Berminyak</button>
  //       <button onClick={() => handleGejalaChange('TipeKulit', 'Sensitif')}>Sensitif</button>
  //       <button onClick={() => handleGejalaChange('TipeKulit', 'Kombinasi')}>Kombinasi</button>
  //     </div>
  //   );
  // };

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
              <p>Apakah berbentuk benjolan kecil?</p>
              <div>
                <button onClick={() => handleGejalaChange('G01', 'yes')}>Ya</button>
                <button onClick={() => handleGejalaChange('G01', 'no')}>Tidak</button>
              </div>
            </div>
          </div>
        );
      }

    if (gejala.G01 === 'yes' && gejala.G05 === 'no' && gejala.G06 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
            <h3>Pertanyaan:</h3>
            <p>Apakah memiliki ujung berwarna hitam?</p>
            <button onClick={() => handleGejalaChange('G06', 'yes')}>Ya</button>
            <button onClick={() => handleGejalaChange('G06', 'no')}>Tidak</button>
          </div>
        </div>
      );
    }

    if (gejala.G01 === 'yes' && gejala.G05 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
            <h3>Pertanyaan:</h3>
            <p>Apakah memiliki ujung berwarna putih?</p>
            <button onClick={() => handleGejalaChange('G05', 'yes')}>Ya</button>
            <button onClick={() => handleGejalaChange('G05', 'no')}>Tidak</button>
          </div>
        </div>
      );
    }

    if (gejala.G01 === 'no' && gejala.G02 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
            <h3>Pertanyaan:</h3>
            <p>Apakah berbentuk benjolan sedang?</p>
            <button onClick={() => handleGejalaChange('G02', 'yes')}>Ya</button>
            <button onClick={() => handleGejalaChange('G02', 'no')}>Tidak</button>
          </div>
        </div>
      );
    }

    if (gejala.G01 === 'no' && gejala.G02 === 'yes' && gejala.G07 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
            <h3>Pertanyaan:</h3>
            <p>Apakah terasa nyeri jika disentuh?</p>
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
            <p>Apakah menyebabkan kemerahan?</p>
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
            <p>Apakah memiliki ujung berwarna putih?</p>
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
            <p>Apakah dipenuhi nanah?</p>
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
            <p>Apakah berbentuk benjolan besar?</p>
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
            <p>Apakah terdapat rasa nyeri yang cukup menganggu?</p>
            <button onClick={() => handleGejalaChange('G09', 'yes')}>Ya</button>
            <button onClick={() => handleGejalaChange('G09', 'no')}>Tidak</button>
          </div>
        </div >
      );
    }

    if (gejala.G03 === 'yes' && gejala.G09 === 'no' && gejala.G10 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
            <h3>Pertanyaan:</h3>
            <p>Apakah berwarna merah?</p>
            <button onClick={() => handleGejalaChange('G10', 'yes')}>Ya</button>
            <button onClick={() => handleGejalaChange('G10', 'no')}>Tidak</button>
          </div>
        </div>
      );
    }

    if (gejala.G03 === 'yes' && gejala.G09 === 'no' && gejala.G10 === 'yes' && gejala.G04 === '') {
      return (
        <div className='pertanyaancontainer'>
          <div className='pertanyaancontainer-inside'>
            <h3>Pertanyaan:</h3>
            <p>Apakah dipenuhi nanah?</p>
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
            <p>Apakah terkesan terpendam?</p>
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
            <p>Apakah berbentuk bintik kecil?</p>
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
 
    if (tipeKulit === '') {
    return (
      <div>
        <h3>Pertanyaan:</h3>
        <p>Apa jenis kulit Anda?</p>
        <button onClick={() => handleGejalaChange('TipeKulit', 'Normal')}>Normal</button>
        <button onClick={() => handleGejalaChange('TipeKulit', 'Kering')}>Kering</button>
        <button onClick={() => handleGejalaChange('TipeKulit', 'Berminyak')}>Berminyak</button>
        <button onClick={() => handleGejalaChange('TipeKulit', 'Sensitif')}>Sensitif</button>
        <button onClick={() => handleGejalaChange('TipeKulit', 'Kombinasi')}>Kombinasi</button>
      </div>
    );
}
    
    if (tipeKulit === 'Normal') {
      return (
        <div>
          <h3>Hasil Diagnosa:</h3>
          <p>{hasilDiagnosis}</p>
          <p>Anda memiliki tipe kulit Normal. Rekomendasi: Retinol untuk mengatasi komedo hitam.</p>
        </div>
      );
    
  }
    
    return isGejalaComplete ? null : (
      <button onClick={forwardChaining}>Diagnosa</button>
    );
  };

  return (
    <div className='expertsystem'>
      <h2>SkinTime Test : Best Active Ingredients for Your Skin </h2>
      <div>
      {diagnosaSelesai ? (
        <div>
          <h3>Diagnosa Selesai:</h3>
          <p>{hasilDiagnosis}</p>
        </div>
      ) : (
        renderQuestion()
      )}
      </div>
    </div>
  );
};

export default ExpertSystem;
