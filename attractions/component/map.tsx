import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { type } from 'os';


type Props = {
    latitude: number,
    longitude: number
}

const MapComponent = ({ latitude, longitude }: Props) => {
    const mapStyles = {
        height: '400px',
        width: '90%',
    };

    return (
        <iframe style={mapStyles} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31001.632576567023!2d100.47809243202207!3d13.76656367326249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29958d30cc7bd%3A0xff336ee0fefc0a3f!2z4Lin4Lix4LiU4LmA4Lia4LiN4LiI4Lih4Lia4Lie4Li04LiV4Lij4LiU4Li44Liq4Li04LiV4Lin4LiZ4Liy4Lij4Liy4Lih4Lij4Liy4LiK4Lin4Lij4Lin4Li04Lir4Liy4Lij!5e0!3m2!1sth!2sth!4v1694876604213!5m2!1sth!2sth" width="600" height="450"></iframe>
    );
};

export default MapComponent;
