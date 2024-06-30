/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Dark theme.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

goog.provide('Blockly.Themes.Dark');

goog.require('Blockly.Theme');

Blockly.Themes.Dark = Blockly.Theme.defineTheme('dark', {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#FFFFFF',
    'toolboxBackgroundColour': '#f3f3f3',
    'toolboxForegroundColour': '64748B',
    'flyoutBackgroundColour': '#e3e3e3',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 0.3,
    'scrollbarColour': '#363636',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.5,
    'cursorColour': '#d0d0d0',
    'blackBackground': '#333'
  }
});
