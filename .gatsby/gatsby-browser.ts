// custom typefaces
import 'typeface-nunito'

import 'normalize.css'
import 'prismjs/themes/prism.css'

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state) {
    location.state.prevPath = prevLocation ? `${prevLocation.pathname}${prevLocation.search}` : '/'
  }
}
