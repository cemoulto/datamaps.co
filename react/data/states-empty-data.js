import { fromJS, List } from 'immutable'

// without 'DC'
export const stateCodes = List([
  'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
  'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
  'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
  'WI', 'WY',
])

export default fromJS({
  AL: { regionName: 'Alabama', code: 'AL', value: 111 },
  AK: { regionName: 'Alaska', code: 'AK', value: null },
  AZ: { regionName: 'Arizona', code: 'AZ', value: null },
  AR: { regionName: 'Arkansas', code: 'AR', value: null },
  CA: { regionName: 'California', code: 'CA', value: null },
  CO: { regionName: 'Colorado', code: 'CO', value: null },
  CT: { regionName: 'Connecticut', code: 'CT', value: null },
  DE: { regionName: 'Delaware', code: 'DE', value: null },
  DC: { regionName: 'District of Columbia', code: 'DC', value: null },
  FL: { regionName: 'Florida', code: 'FL', value: 666 },
  GA: { regionName: 'Georgia', code: 'GA', value: null },
  HI: { regionName: 'Hawaii', code: 'HI', value: null },
  ID: { regionName: 'Idaho', code: 'ID', value: null },
  IL: { regionName: 'Illinois', code: 'IL', value: null },
  IN: { regionName: 'Indiana', code: 'IN', value: null },
  IA: { regionName: 'Iowa', code: 'IA', value: null },
  KS: { regionName: 'Kansa', code: 'KS', value: null },
  KY: { regionName: 'Kentucky', code: 'KY', value: null },
  LA: { regionName: 'Lousiana', code: 'LA', value: null },
  ME: { regionName: 'Maine', code: 'ME', value: null },
  MD: { regionName: 'Maryland', code: 'MD', value: null },
  MA: { regionName: 'Massachusetts', code: 'MA', value: null },
  MI: { regionName: 'Michigan', code: 'MI', value: null },
  MN: { regionName: 'Minnesota', code: 'MN', value: null },
  MS: { regionName: 'Mississippi', code: 'MS', value: null },
  MO: { regionName: 'Missouri', code: 'MO', value: null },
  MT: { regionName: 'Montana', code: 'MT', value: null },
  NE: { regionName: 'Nebraska', code: 'NE', value: null },
  NV: { regionName: 'Nevada', code: 'NV', value: null },
  NH: { regionName: 'New Hampshire', code: 'NH', value: null },
  NJ: { regionName: 'New Jersey', code: 'NJ', value: null },
  NM: { regionName: 'New Mexico', code: 'NM', value: null },
  NY: { regionName: 'New York', code: 'NY', value: null },
  NC: { regionName: 'North Carolina', code: 'NC', value: null },
  ND: { regionName: 'North Dakota', code: 'ND', value: null },
  OH: { regionName: 'Ohio', code: 'OH', value: null },
  OK: { regionName: 'Oklahoma', code: 'OK', value: null },
  OR: { regionName: 'Oregon', code: 'OR', value: null },
  PA: { regionName: 'Pennsylvania', code: 'PA', value: null },
  RI: { regionName: 'Rhode Island', code: 'RI', value: null },
  SC: { regionName: 'South Carolina', code: 'SC', value: null },
  SD: { regionName: 'South Dakota', code: 'SD', value: null },
  TN: { regionName: 'Tennessee', code: 'TN', value: null },
  TX: { regionName: 'Texas', code: 'TX', value: null },
  UT: { regionName: 'Utah', code: 'UT', value: null },
  VT: { regionName: 'Vermont', code: 'VT', value: null },
  VA: { regionName: 'Virginia', code: 'VA', value: null },
  WA: { regionName: 'Washington', code: 'WA', value: null },
  WV: { regionName: 'West Virginia', code: 'WV', value: null },
  WI: { regionName: 'Wisconsin', code: 'WI', value: null },
  WY: { regionName: 'Wyoming', code: 'WY', value: null },
})