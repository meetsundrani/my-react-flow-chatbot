import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position="top-center" />
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </MantineProvider>
  )
}
