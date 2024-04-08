import SectionCard from '@components/SectionCard';

const Important = (props: { children: string }): JSX.Element => (
	<span className='font-bold text-rose-400'>{props.children}</span>
);

const TsConfigSection = (): JSX.Element => (
	<SectionCard title='Typescript Configuration'>
		<div>
			<p>
				Typescript configuration is put inside{' '}
				<Important>tsconfig.json</Important>. It keeps basic
				configuration provided with{' '}
				<Important>create vite@latest</Important> and adding below
				things.
			</p>
			<ul className='list-disc pl-8 my-4'>
				<li>
					Defines <b>&quot;paths&quot;</b> for easy import, e.g.
					@root;
				</li>
				<li>
					Adds properties about <b>Linting</b>.
				</li>
			</ul>
			<p>
				As mentioned in reminder, this kit will more focus on ESM target
				and not in CJS. Typescript config target set to <b>ES2020</b>.
			</p>
		</div>
	</SectionCard>
);

const ViteConfigSection = (): JSX.Element => (
	<SectionCard title='Vite Configuration'>
		<div>
			<p className='pb-3'>
				Vite is the least configuration editted. The first and the only
				one action done is adding <Important>tsconfigPaths</Important>{' '}
				plugins. Since I have defined <b>&quot;paths&quot;</b> property
				in <b>Typescript Configuration</b>. This plugins helps resolved
				import paths when compile and build.
			</p>
			<p>
				Worth to notice that I did not use <Important>Babel</Important>{' '}
				plugin in this kit. According to research, Vite has already
				support Babel compliation under the hood, adding{' '}
				<Important>Babel</Important> is only to give additional
				configuration.
			</p>
		</div>
	</SectionCard>
);

const PrettierConfigSection = (): JSX.Element => (
	<SectionCard title='Prettier Configuration'>
		<div>
			<p className='pb-3'>
				This kit have not using any pre-defined Prettier template for
				configuraiton. It based on self habit to defined.
			</p>
			<p>
				Additionally, this kit added Prettier plugin -{' '}
				<Important>@trivago/prettier-plugin-sort-imports</Important>. It
				helps to implement properties <b>importOrder</b> and{' '}
				<b>importOrderSeparation</b> to make import statement prettier.
			</p>
		</div>
	</SectionCard>
);

const EslintConfigSection = (): JSX.Element => (
	<SectionCard title='Eslint Configuration'>
		<div>
			<p>
				This is the most critical configuration in this starter kit. In
				order to keep code quality, differenet ESLINT rules has setup.
			</p>
			<p className='underline py-2'>Plain JavaScript Eslint</p>
		</div>
	</SectionCard>
);

const DescriptionSection = (): JSX.Element => (
	<div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2'>
		<TsConfigSection />

		<ViteConfigSection />

		<PrettierConfigSection />
		<EslintConfigSection />
	</div>
);

export default DescriptionSection;
