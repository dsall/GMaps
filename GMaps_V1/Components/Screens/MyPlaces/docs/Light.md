## <MapboxGL.Light />
### Light represents the light source for extruded geometries

### props
| Prop | Type | Default | Required | Description |
| ---- | :--: | :-----: | :------: | :----------: |
| style | `custom` | `none` | `false` | Customizable style attributes |


### styles

* <a href="#name">anchor</a><br/>
* <a href="#name-1">position</a><br/>
* <a href="#name-2">color</a><br/>
* <a href="#name-3">intensity</a><br/>

___

#### Name
`anchor`

#### Description
Whether extruded geometries are lit relative to the map or viewport.

#### Type
`enum`
#### Default Value
`viewport`

#### Supported Values
**map** - The position of the light source is aligned to the rotation of the map.<br />
**viewport** - The position of the light source is aligned to the rotation of the viewport.<br />



___

#### Name
`position`

#### Description
Position of the light source relative to lit (extruded) geometries, in [r radial coordinate, a azimuthal angle, p polar angle] where r indicates the distance from the center of the base of an object to its light, a indicates the position of the light relative to 0° (0° when `light.anchor` is set to `viewport` corresponds to the top of the viewport, or 0° when `light.anchor` is set to `map` corresponds to due north, and degrees proceed clockwise), and p indicates the height of the light (from 0°, directly above, to 180°, directly below).

#### Type
`array<number>`
#### Default Value
`[1.15,210,30]`



___

#### Name
`color`

#### Description
Color tint for lighting extruded geometries.

#### Type
`color`
#### Default Value
`#ffffff`



___

#### Name
`intensity`

#### Description
Intensity of lighting (on a scale from 0 to 1). Higher numbers will present as more extreme contrast.

#### Type
`number`
#### Default Value
`0.5`

#### Minimum
`0`


#### Maximum
`1`

