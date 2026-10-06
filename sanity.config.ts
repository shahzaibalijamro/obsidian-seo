import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
// import { presentationTool } from 'sanity/presentation';
import { projectId, dataset } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  
  schema,
  
  plugins: [
    structureTool(),
    // We will enable presentationTool later when we set up Draft Mode fully
    /*
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    */
  ],
});
