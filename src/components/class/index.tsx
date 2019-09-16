import React from 'react';

export class Image extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        console.log(this.props)

    }

    render() {
        const defoultPic = { defoultPic: 'https://image.shutterstock.com/image-vector/unavailable-flat-style-busy-sign-260nw-646745005.jpg' }
        const ImageSize: any = { width: '100px', height: '100px', margin: '5px' }
        const alt = "puppie image"
        const src: any = this.props.src || defoultPic.defoultPic
        if (src === defoultPic.defoultPic) {

            ImageSize.opacity = "0.5"
        }
        return <img alt={alt} style={ImageSize} src={src} />
    }
}