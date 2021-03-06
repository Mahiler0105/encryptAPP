import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  actionSetEncryptFile,
  actionClearEncryptFile,
  actionSendEncryptFile,
} from '../../../modules/core/general/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader, Button, InputFile, Modal} from '../../components';
import {STYLES_GENERAL, COLORS} from '../../styles';

const EncryptionScreen = ({
  fileName,
  downloadName,
  actionSetEncryptFile: setEncryptFile,
  actionClearEncryptFile: clearEncryptFile,
  actionSendEncryptFile: sendEncryptFile,
}) => {
  return (
    <SafeAreaView>
      <ScrollView style={STYLES_GENERAL.container}>
        <InputFile
          fileName={fileName}
          color={COLORS.green}
          handleFile={setEncryptFile}
        />
        <Button
          text="ELIMINAR"
          color={COLORS.lightGreen}
          disabled={fileName.length === 0}
          handlePress={clearEncryptFile}
        />
        <Button
          text="ENCRIPTAR"
          color={COLORS.green}
          disabled={fileName.length === 0}
          handlePress={sendEncryptFile}
        />
      </ScrollView>
      <Loader />
      <Modal
        color={COLORS.green}
        buttonColor={COLORS.lightGreen}
        fileName={downloadName}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  fileName: state.general.encryptFile.name,
  downloadName: state.general.downloadFile.name,
});

export default connect(mapStateToProps, {
  actionSetEncryptFile,
  actionClearEncryptFile,
  actionSendEncryptFile,
})(EncryptionScreen);
