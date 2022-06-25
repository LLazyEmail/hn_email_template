// The template we'll resolve later


const template = {
  foo           : 'bar',
  subject       : ref('subject'),
  deep_stringed : ref('deep.stringed'),
  deep_art      : ref(['deep','art']),
  called_plain  : bound(() => 'dinges'),
  called_args   : bound((...args: any[]) => args, null, ['hello','world']),
  called_reffed : bound((...args: any[]) => args, null, ['hello',ref('subject')]),
};
