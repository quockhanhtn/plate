import { GetOnHotkeyToggleNodeTypeOptions } from '../../common/utils/getOnHotkeyToggleNodeType';
import { BlockquoteElement } from './components/BlockquoteElement';
import { BlockquoteKeyOption, BlockquotePluginOptionsValues } from './types';

export const ELEMENT_BLOCKQUOTE = 'blockquote';

export const DEFAULTS_BLOCKQUOTE: Record<
  BlockquoteKeyOption,
  Required<BlockquotePluginOptionsValues> & GetOnHotkeyToggleNodeTypeOptions
> = {
  blockquote: {
    component: BlockquoteElement,
    type: ELEMENT_BLOCKQUOTE,
    hotkey: 'mod+shift+.',
    rootProps: {
      className: 'slate-blockquote',
      as: 'blockquote',
    },
  },
};
