import SectionCard from '@components/SectionCard';

const Important = (props: { children: string }): JSX.Element => (
	<span className='font-bold text-rose-400'>{props.children}</span>
);

const SubItemTitle = (props: { children: string }): JSX.Element => (
	<p className='underline py-2 font-semibold'>{props.children}</p>
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
			<SubItemTitle>Plain JavaScript Eslint</SubItemTitle>
			<p>
				There is no ESLINT recomendation make use in Plain Javascript.
				All rules are self configured to match with best practice for my
				own. There is total 97 rules are configured in{' '}
				<b>esling.config.js</b>
			</p>
			<SubItemTitle>Typescript Eslint</SubItemTitle>
			<p>
				There is just a simple plugin{' '}
				<Important>typescript-eslint</Important> installed for
				Typescript. No additional rules configured and simply using
				recommended rules.
			</p>
			<SubItemTitle>React Related</SubItemTitle>
			<p>
				In this section, it configures with <b>React</b> related ESLINT.
				3 plugins are installed:
			</p>
			<ul className='list-decimal pl-5 my-2'>
				<li>eslint-plugin-react</li>
				<li>eslint-plugin-react-refresh</li>
				<li>eslint-plugin-react-hooks</li>
			</ul>
			<p>
				There is no much custom configuration in second and third
				plugins. So most of the rules are about reacts. According to
				documents, it looks more like more concerned on{' '}
				<Important>Code Formatting and Props Standard</Important>. And
				so that most of the rules can be fixed by command <b>--fix</b>{' '}
				to complete.
			</p>
			<SubItemTitle>JSX A11y</SubItemTitle>
			<p>
				This plugin is obviously more concerned on JSX styling and
				linting. However, you will see there is a little of custom rules
				configure in <b>eslint.config.js</b>. Most of rules are in{' '}
				<Important>Recommended Rules</Important> and which is all very
				useful and no need to overwrite.
			</p>
			<SubItemTitle>Preitter</SubItemTitle>
			<p>
				A preitter eslint plugin is installed to prevent contradiction
				from <b>eslint recommended</b> and <b>Preitter configuration</b>
				.
			</p>
		</div>
	</SectionCard>
);

const Footer = (): JSX.Element => (
	<div className='m-5 text-center text-sm italic'>
		<p>
			Some configuration like Typescript, Eslint and Prettier can wisely
			use in different project. Kindly note that, these configuration are
			just my personal practice on coding and suggestions from my past
			project experience. It will not be frequently updated but it should
			more or less unchanged throughout time.
		</p>
	</div>
);

const DescriptionSection = (): JSX.Element => (
	<>
		<div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2'>
			<TsConfigSection />

			<ViteConfigSection />

			<PrettierConfigSection />

			<EslintConfigSection />
		</div>
		<Footer />
	</>
);

export default DescriptionSection;
