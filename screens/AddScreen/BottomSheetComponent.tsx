import React, { useState } from 'react';
import { BottomSheet } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddFab from '../../components/AddFab';
import AddScreen from './AddScreen';
import ItemsManager from '../../classes/ItemsManager';


interface BottomSheetComponentProps {
    itemsManager: ItemsManager;
};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = ({ itemsManager }) => {
    const [isVisible, setIsVisible] = useState(false);
    const setVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <SafeAreaProvider>
            <AddFab setIsVisible={setIsVisible} />
            <BottomSheet isVisible={isVisible}>
                <AddScreen setVisibility={setVisibility} itemsManager={itemsManager} />
            </BottomSheet>
        </SafeAreaProvider>
    );
};

export default BottomSheetComponent;
