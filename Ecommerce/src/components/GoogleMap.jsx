import { Map } from '@googlemaps/react-wrapper'

export const GoogleMap=()=> {
  return (
    <div>
      <Map apiKey="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.81133880664424!2d77.07093145372335!3d28.61505160000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04cc29f8d56f%3A0x791000af6ab054da!2s96%2F2%2C%20Block%20A%2C%20Jivan%20Park%2C%20Bindapur%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1705405993874!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </div>
  )
};
